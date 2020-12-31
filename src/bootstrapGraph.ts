import { gql } from 'apollo-server';
import proto, { messages } from './messages';
import grpc from 'grpc';
import { Client } from 'ts-nats';
import grpcErrors from 'grpc-errors';

import { protobufTimestampToDtoTimestamp, dateToProtobufTimestamp } from './utils/timestampUtils';

const TIMEOUT = 3000;

function mapError(code: number | null | undefined) {
  switch (code) {
    case (messages.entry.Error.Code.UNKNOWN):
      return new Error('UNEXPECTED');
    case (messages.entry.Error.Code.NOT_FOUND):
      return new Error('NOT_FOUND');
    case (messages.entry.Error.Code.VALIDATION_FAILED):
      return new Error('VALIDATION_FAILED');
    default:
      return new Error('UNEXPECTED');
  }
}

function mapGrpcError(code: number | null | undefined) {
  switch (code) {
    case (grpcErrors.PermissionDeniedError.prototype.code):
      return new Error('PERMISSION_DENIED');
    case (grpcErrors.NotFoundError.prototype.code):
      return new Error('NOT_FOUND');
    default:
      return new Error('UNEXPECTED');
  }
}

interface BootstrapGraph {
  nc: Client;
}

export default async function bootstrapGraph({ nc }: BootstrapGraph) {
  const typeDefs = gql`
    type Entry {
      id: String
      text: String
      createdAt: String
      updatedAt: String
    }

    type PageInfo {
      totalCount: Int
      hasNextPage: Boolean
      startCursor: String
      endCursor: String
    }

    type ListEntriesResponse {
      edges: [Entry]
      pageInfo: PageInfo
    }

    type DailyVelocity {
      day: String
      score: Int
    }

    type Query {
      entry(id: String!): Entry
      readEntry(id: String!): Entry
      entries(first: Int, after: String): ListEntriesResponse
      velocityOverview: [DailyVelocity]
    }

    type CreateEntryResponse {
      id: String
    }

    type DeleteEntryResponse {
      result: Boolean
    }

    type Mutation {
      createEntry(text: String!): CreateEntryResponse
      updateEntry(id: String!, text: String!): Entry
      deleteEntry(id: String!): DeleteEntryResponse
    }
`;

  interface EntryQueryArgs {
    id: string;
  }

  interface ReadEntryQueryArgs {
    id: string;
  }

  interface CreateEntryArgs {
    text: string;
  }

  interface UpdateEntryArgs {
    id: string;
    text: string;
  }

  interface DeleteEntryArgs {
    id: string;
  }

  interface Context {
    userId: string;
  }

  const grpcClient = new grpc.Client("notebook-grpc-production:8080", grpc.credentials.createInsecure());
  const rpcImpl = function (method: any, requestData: any, callback: any) {
    grpcClient.makeUnaryRequest(
      `/messages.notebook.Notebook/${method.name}`,
      arg => arg,
      arg => arg,
      requestData,
      null,
      null,
      callback
    )
  }
  const grpcService = messages.notebook.Notebook.create(rpcImpl)

  const resolvers = {
    Query: {
      entry: async (_parent: any, args: EntryQueryArgs, { userId }: Context) => {
        const request = messages.entry.GetEntryRequest.encode({
          payload: {
            id: args.id,
          },
          context: {
            principal: {
              type: messages.entry.Principal.Type.USER,
              id: userId,
            },
            traceId: 'abc123',
          },
        }).finish();
        const message = await nc.request('get.entry', TIMEOUT, request);
        const response = message.data;
        const { error, payload: entry } = messages.entry.GetEntryResponse.decode(response);
        if (error)  throw mapError(error.code);
        if (entry) {
          const { id, text, createdAt, updatedAt } = entry;
          return {
            id,
            text: text || "",
            createdAt: protobufTimestampToDtoTimestamp(createdAt),
            updatedAt: protobufTimestampToDtoTimestamp(updatedAt),
          };
        }
        throw new Error('not found');
      },
      readEntry: async (_parent: any, args: ReadEntryQueryArgs, { userId }: Context) => {
        try {
          const response = await grpcService.readEntry({
            principal: {
              type: messages.notebook.Principal.Type.USER,
              id: userId,
            },
            payload: {
              id: args.id,
            }
          })
          const entry = response.payload
          if (entry) {
            const { id, text, createdAt, updatedAt } = entry;
            const entity = {
              id,
              text,
              createdAt: protobufTimestampToDtoTimestamp(createdAt),
              updatedAt: protobufTimestampToDtoTimestamp(updatedAt)
            }
            return entity
          }
          throw new Error('NOT_FOUND');
        } catch (error) {
          console.log(error)
          throw mapGrpcError(error.code)
        }
      },
      entries: async (_parent: any, args: any, { userId }: Context) => {
        const request = messages.entry.ListEntriesRequest.encode({
          payload: {
            first: args.first || 50,
            after: args.after,
            creatorId: userId,
          },
          context: {
            principal: {
              type: messages.entry.Principal.Type.USER,
              id: userId,
            },
            traceId: 'abc123'
          },
        }).finish();
        const message = await nc.request('list.entry', TIMEOUT, request);
        const response = message.data;
        const { error, payload: entries, pageInfo } = messages.entry.ListEntriesResponse.decode(response);
        if (error) throw mapError(error.code);
        const edges = entries.map(entry => {
          return {
            ...entry,
            text: entry.text || "",
            createdAt: protobufTimestampToDtoTimestamp(entry.createdAt),
            updatedAt: protobufTimestampToDtoTimestamp(entry.updatedAt),
          }
        })

        if (entries) {
          return {
            edges,
            pageInfo
          }
        }
        throw new Error('not found');
      },
      velocityOverview: async (_parent: any, args: any, { userId }: Context) => {
        // TODO: Move to domain event?
        const yearAgo = new Date(Date.now() - 12 * (1000 * 60 * 60 * 24 * 30))

        const request = messages.insights.GetVelocityRequest.encode({
          payload: {
            start: dateToProtobufTimestamp(yearAgo),
            end: dateToProtobufTimestamp(new Date()),
            creatorId: userId,
          },
          context: {
            principal: {
              type: messages.entry.Principal.Type.USER,
              id: userId,
            },
            traceId: 'abc123'
          },
        }).finish();

        const message = await nc.request('insights.get.velocity', TIMEOUT, request)
        const response = message.data;
        const { error, payload } = messages.insights.GetVelocityResponse.decode(response);;
        if (error) throw mapError(error.code);
        const velocities = payload.map(velocity => {
          return {
            score: velocity.score,
            day: protobufTimestampToDtoTimestamp(velocity.day)
          }
        })
        return velocities;
      },
    },

    Mutation: {
      createEntry: async (_parent: any, args: CreateEntryArgs, { userId }: Context) => {
        const request = messages.entry.CreateEntryRequest.encode({
          payload: {
            text: args.text,
            creatorId: userId,
          },
          context: {
            traceId: 'abc123',
            principal: {
              type: messages.entry.Principal.Type.USER,
              id: userId,
            }
          },
        }).finish();
        const message = await nc.request('create.entry', TIMEOUT, request);
        const response = message.data;
        const { error, payload: entry } = messages.entry.CreateEntryResponse.decode(response);
        if (error) throw mapError(error.code);
        if (entry) {
          const { id } = entry;
          return {
            id
          };
        }
      },
      updateEntry: async (_parent: any, args: UpdateEntryArgs, { userId }: Context) => {
        // TODO: Change this to be a meaningful domain event, not a generic update.
        const request = messages.entry.UpdateEntryRequest.encode({
          payload: {
            id: args.id,
            text: args.text,
          },
          context: {
            principal: {
              type: messages.entry.Principal.Type.USER,
              id: userId,
            },
            traceId: 'abc123',
          },
        }).finish();
        const message = await nc.request('update.entry', TIMEOUT, request);
        const response = message.data;
        const { error, payload: entry } = messages.entry.UpdateEntryResponse.decode(response);
        if (error) throw mapError(error.code);
        if (entry) {
          const { id, text, createdAt, updatedAt } = entry;
          return {
            id,
            text,
            createdAt: protobufTimestampToDtoTimestamp(createdAt),
            updatedAt: protobufTimestampToDtoTimestamp(updatedAt),
          };
        }
      },
      deleteEntry: async (_parent: any, args: DeleteEntryArgs, { userId }: Context) => {
        const request = messages.entry.DeleteEntryRequest.encode({
          payload: {
            id: args.id
          },
          context: {
            principal: {
              type: messages.entry.Principal.Type.USER,
              id: userId,
            },
            traceId: 'abc123',
          }
        }).finish();
        const message = await nc.request('delete.entry', TIMEOUT, request);
        const response = message.data;
        const { error } = messages.entry.DeleteEntryResponse.decode(response);
        if (error) throw mapError(error.code);
        return {
          result: true,
        }
      }
    }
  }

  return { typeDefs, resolvers };
}
