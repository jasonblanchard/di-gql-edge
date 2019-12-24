import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import morgan from 'morgan';

import bootstrapGraph from './bootstrapGraph';

require('dotenv').config()


const PORT = process.env.PORT;

const natsHosts = [<string>process.env.NATS_HOST];

async function bootstrap() {
  const app = express();
  app.get('/health', (request, response) => {
    // TODO: Make sure we're still connected to NATS
    response.json({ status: 'ok' });
  });
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

  try {
    const { typeDefs, resolvers } = await bootstrapGraph({ natsHosts });
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app, path: '/' });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  app.listen({ port: PORT }, () => {
    console.log(`🚀 entry-gql-edge ready`);
  });
}

bootstrap();
