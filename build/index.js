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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const bootstrapGraph_1 = __importDefault(require("./bootstrapGraph"));
require('dotenv').config();
const PORT = process.env.PORT;
const natsHosts = [process.env.NATS_HOST];
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const { typeDefs, resolvers } = yield bootstrapGraph_1.default({ natsHosts });
        const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
        const app = express_1.default();
        app.use(morgan_1.default(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
        server.applyMiddleware({ app, path: '/' });
        app.listen({ port: PORT }, () => {
            console.log(`🚀 entry-gql-edge ready`);
        });
    });
}
bootstrap();
//# sourceMappingURL=index.js.map