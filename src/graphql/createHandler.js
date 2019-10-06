// @flow
import { ApolloServer } from 'apollo-server-micro';
import { createContext } from './createContext';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const server = new ApolloServer({
  context: createContext,
  // cors: false,
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
});

export const createHandler = () => server.createHandler();
