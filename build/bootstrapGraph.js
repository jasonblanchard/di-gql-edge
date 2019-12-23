"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const messages_1 = require("./messages");
const ts_nats_1 = require("ts-nats");
const TIMEOUT = 3000;
function mapError(code) {
    switch (code) {
        case (1):
            return new Error('UNEXPECTED');
        default:
            return new Error('UNEXPECTED');
    }
}
function bootstrapGraph({ natsHosts }) {
    return __awaiter(this, void 0, void 0, function* () {
        let nc = yield ts_nats_1.connect({
            servers: natsHosts,
            payload: ts_nats_1.Payload.BINARY
        });
        const typeDefs = apollo_server_1.gql `
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
        const resolvers = {
            Query: {
                entry: (_obj, args) => __awaiter(this, void 0, void 0, function* () {
                    const request = messages_1.messages.entry.GetEntryRequest.encode({
                        id: '123',
                        creatorId: '123',
                        traceId: 'abc123'
                    }).finish();
                    const message = yield nc.request('get.entry', TIMEOUT, request);
                    const response = message.data;
                    const { error, payload: entry } = messages_1.messages.entry.GetEntryResponse.decode(response);
                    if (error)
                        throw mapError(error.code);
                    if (entry) {
                        const { id, text } = entry;
                        return { id, text };
                    }
                    throw new Error('not found');
                })
            },
            Mutation: {
                createEntry: () => __awaiter(this, void 0, void 0, function* () {
                    const request = messages_1.messages.entry.CreateEntryRequest.encode({
                        text: 'asdf asdf asdf',
                        creatorId: '123',
                        traceId: 'abc123'
                    }).finish();
                    const message = yield nc.request('create.entry', TIMEOUT, request);
                    const response = message.data;
                    const { error, payload: entry } = messages_1.messages.entry.CreateEntryResponse.decode(response);
                    if (error)
                        throw mapError(error.code);
                    if (entry) {
                        const { id } = entry;
                        return {
                            id
                        };
                    }
                    throw new Error('Unexpected');
                })
            }
        };
        return { typeDefs, resolvers };
    });
}
exports.default = bootstrapGraph;
//# sourceMappingURL=bootstrapGraph.js.map