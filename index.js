const { ApolloServer, gql } = require('apollo-server-micro');
const typeDefs = require('./src/typedefs');
const getExpenses = require('./src/queries/getExpenses');
const addExpense = require('./src/mutations/addExpense');
const getEnvVars = require('./src/queries/getEnvVars');

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

module.exports = server.createHandler();
