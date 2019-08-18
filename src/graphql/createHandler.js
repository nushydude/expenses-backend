
import { ApolloServer } from 'apollo-server-micro';
import { createContext } from './createContext';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: createContext,
});

export const createHandler = () => server.createHandler();
