import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import morgan from 'morgan';

import bootstrapGraph from './bootstrapGraph';

require('dotenv').config()


const PORT = process.env.PORT;

const natsHosts = [<string>process.env.NATS_HOST];

async function bootstrap() {
  const { typeDefs, resolvers } = await bootstrapGraph({ natsHosts });

  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
  server.applyMiddleware({ app, path: '/' });

  app.listen({ port: PORT }, () => {
    console.log(`🚀 entry-gql-edge ready`);
  });
}

bootstrap();
