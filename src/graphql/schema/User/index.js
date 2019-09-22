// @flow
import type { UserMongooseRecord } from '../../../mongoose/types/User';
import { categories } from './categories';
import { sources } from './sources';

export const User = {
  id: (parent: UserMongooseRecord) => parent._id.toString(),
  categories,
  sources,
};

export const typeDef = /* GraphQL */ `
  enum Role {
    ADMIN
    USER
  }

  type User {
    id: ID!
    email: String!
    name: String
    roles: [Role]!
    sources: [String]!
    categories: [String]!
  }
`;
