import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import resolvers from './resolvers';
import {
  genRandomDate,
  genRandomDateTime,
  genRandomFloat,
  genRandomInt,
  genRandomString,
} from './utils/mock';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const schema = loadSchemaSync(join(__dirname, '../../frontend/schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const mocks = {
  Int: genRandomInt,
  Float: genRandomFloat,
  String: genRandomString,
  Date: genRandomDate,
  DateTime: genRandomDateTime,
};

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const server = new ApolloServer({
  schema: schemaWithResolvers,
  mocks,
});

server.listen().then(({ url }) => {
  console.log(
    `🚀 Mock GraphQL Server is ready at ${url}`
  );
});
