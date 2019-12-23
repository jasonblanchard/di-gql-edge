"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql `
  type Entry {
    id: String
    text: String
  }

  type Query {
    entry(id: String): Entry
  }
`;
//# sourceMappingURL=resolvers.js.map