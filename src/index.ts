import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import morgan from 'morgan';
import { connect, Payload } from 'ts-nats';

import bootstrapGraph from './bootstrapGraph';
import checkStatus from './ops/checkStatus';

require('dotenv').config();


const PORT = process.env.PORT;

const natsHosts = [<string>process.env.NATS_HOST];

async function bootstrap() {
  const app = express();
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

  let nc = await connect({
    servers: natsHosts,
    payload: Payload.BINARY
  });

  app.get('/health', (request, response) => {
    const { services, httpCode } = checkStatus({ nc });
    response.status(httpCode).json(services);
  });

  const { typeDefs, resolvers } = await bootstrapGraph({ nc });
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app, path: '/' });

  app.listen({ port: PORT }, () => {
    console.log(`🚀 entry-gql-edge ready`);
  });
}

bootstrap().catch(error => {
  console.log(error)
  process.exit(1);
});
