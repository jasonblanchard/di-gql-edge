import { gql } from 'apollo-server';
import { messages } from './messages';
import { connect, Payload } from 'ts-nats';

const TIMEOUT = 3000;

function mapError(code: number | null | undefined) {
  switch (code) {
    case (1):
      return new Error('UNEXPECTED');
    default:
      return new Error('UNEXPECTED');
  }
}

interface BootstrapGraph {
  natsHosts: string[];
}

export default async function bootstrapGraph({ natsHosts }: BootstrapGraph) {
  let nc = await connect({
    servers: natsHosts,
    payload: Payload.BINARY
  });

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
      createEntry(text: String!): CreateEntryResponse
    }
`;

  interface EntryQueryArgs {
    id: string;
  }

  const resolvers = {
    Query: {
      entry: async (_obj: any, args: EntryQueryArgs) => {
        const request = messages.entry.GetEntryRequest.encode({
          id: '123',
          creatorId: '123',
          traceId: 'abc123'
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
      createEntry: async () => {
        const request = messages.entry.CreateEntryRequest.encode({
          text: 'asdf asdf asdf',
          creatorId: '123',
          traceId: 'abc123'
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
