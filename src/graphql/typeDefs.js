
import { DateTimeScalar } from '@saeris/graphql-scalars';
import { typeDef as EnvVars } from './schema/EnvVars';
import { typeDef as Expense } from './schema/Expense';
import { Error, MutationResponse } from './helpers';
import { rootMutation } from './rootMutation';
import { rootQuery } from './rootQuery';

const rootSchema = /* GraphQL */ `
  type Query {
    # TODO add explanation
    # dummy resolver to allow empty type
    _: Boolean
  }

  type Mutation {
    # TODO add explanation
    # dummy resolver to allow empty type
    _: Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

// $FlowFixMe
export const typeDefs = [
  ...Object.values(rootMutation),
  ...Object.values(rootQuery),
]

  // extract colocated resolver type defs
  // $FlowFixMe - ignoring error above marks resolver as `mixed`
  .map(resolver => resolver.typeDef)

  // legacy resolvers do not have colocated typedefs, so filter out undefined
  .filter(Boolean)

  // add our GraphQL type defs, as there's no resolver they can attach to
  .concat([EnvVars, Expense, DateTimeScalar, Error, MutationResponse])
  .concat(rootSchema);
