import { gql } from 'apollo-server';
import { messages } from './messages';
import { Client } from 'ts-nats';

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
    }

    type Query {
      entry(id: String): Entry
    }

    type CreateEntryResponse {
      id: String
    }

    type Mutation {
      createEntry(text: String): CreateEntryResponse
    }
`;

  interface EntryQueryArgs {
    id: string;
  }

  interface CreateEntryArgs {
    text: string;
  }

  const resolvers = {
    Query: {
      entry: async (_context: any, args: EntryQueryArgs) => {
        const request = messages.entry.GetEntryRequest.encode({
          payload: {
            id: args.id,
          },
          context: {
            userId: '123',
            traceId: 'abc123'
          },
        }).finish();
        const message = await nc.request('get.entry', TIMEOUT, request);
        const response = message.data;
        const { error, payload: entry } = messages.entry.GetEntryResponse.decode(response);
        if (error)  throw mapError(error.code);
        if (entry) {
          const { id, text } = entry;
          return { id, text };
        }
        throw new Error('not found');
      }
    },

    Mutation: {
      createEntry: async (_context:any, args: CreateEntryArgs) => {
        const request = messages.entry.CreateEntryRequest.encode({
          payload: {
            text: args.text,
          },
          context: {
            userId: '123',
            traceId: 'abc123'
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
        throw new Error('Unexpected');
      }
    }
  }

  return { typeDefs, resolvers };
}
