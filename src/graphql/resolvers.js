import * as Mutation from './mutations';
import * as Query from './queries';

export const resolvers = {
  Query,
  Mutation,
  MutationResponse: {
    __resolveType: () => {
      throw new Error(
        'MutationResponse interface should not be used as a return type',
      );
    },
  },
};