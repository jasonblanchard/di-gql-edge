import { gql } from 'apollo-server';
import { messages } from './messages';
import { Client } from 'ts-nats';

import { protobufTimestampToDtoTimestamp } from './utils/timestampUtils';

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

    type Query {
      entry(id: String!): Entry
      entries(first: Int, after: String): ListEntriesResponse
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

  const resolvers = {
    Query: {
      entry: async (_parent: any, args: EntryQueryArgs, { userId }: Context) => {
        const request = messages.entry.GetEntryRequest.encode({
          payload: {
            id: args.id,
          },
          context: {
            userId, // TODO: Remove,
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
            text,
            createdAt: protobufTimestampToDtoTimestamp(createdAt),
            updatedAt: protobufTimestampToDtoTimestamp(updatedAt),
          };
        }
        throw new Error('not found');
      },
      entries: async (_parent: any, args: any, { userId }: Context) => {
        const request = messages.entry.ListEntriesRequest.encode({
          payload: {
            first: args.first || 50,
            after: args.after,
            creatorId: userId,
          },
          context: {
            userId, // TODO: Remove
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
      }
    },

    Mutation: {
      createEntry: async (_parent: any, args: CreateEntryArgs, { userId }: Context) => {
        const request = messages.entry.CreateEntryRequest.encode({
          payload: {
            text: args.text,
            creatorId: userId,
          },
          context: {
            userId, // TODO: Remove
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
        const request = messages.entry.UpdateEntryRequest.encode({
          payload: {
            id: args.id,
            text: args.text,
          },
          context: {
            userId, // TODO: Remove
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
            userId, // TODO: Remove
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
