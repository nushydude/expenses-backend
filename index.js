import { ApolloServer, gql } from 'apollo-server-micro';
import typeDefs from './src/typedefs';
import getExpenses from './src/queries/getExpenses';
import addExpense from './src/mutations/addExpense';
import getEnvVars from './src/queries/getEnvVars';

const resolvers = {
  Query: {
    getExpenses,
    getEnvVars,
  },
  Mutation: {
    addExpense,
  },
  MutationResponse: {
    __resolveType: () => {
      throw new Error(
        'MutationResponse interface should not be used as a return type'
      );
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

export default server.createHandler();
