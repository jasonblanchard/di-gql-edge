import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import morgan from 'morgan';
import { connect, Payload } from 'ts-nats';
import jwt from 'jsonwebtoken';

import bootstrapGraph from './bootstrapGraph';
import checkStatus from './ops/checkStatus';

require('dotenv').config();


const PORT = process.env.PORT;

const natsHosts = [<string>process.env.NATS_HOST];

function getAuthorizationToken(authorizationHeader: string | undefined) {
  if (!authorizationHeader) return '';
  const match = authorizationHeader.match(/^Bearer (.+)$/);
  if (!match) return '';
  return match[1];
}

interface DecodedAuthorizationPayload {
  uesrUuid: string;
}

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
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    context: (integrationContext) => {
      const token = getAuthorizationToken(integrationContext.req.headers.authorization);
      const decodedToken = jwt.decode(token);
      const userId = decodedToken ? (decodedToken as DecodedAuthorizationPayload).uesrUuid : '';

      return {
        userId,
      }
    }
  });
  server.applyMiddleware({ app, path: '/' });

  app.listen({ port: PORT }, () => {
    console.log(`🚀 gql-edge ready on port ${PORT}`);
  });
}

bootstrap().catch(error => {
  console.log(error)
  process.exit(1);
});
