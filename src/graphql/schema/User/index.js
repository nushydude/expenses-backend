// @flow
export const User = {};

export const typeDef = /* GraphQL */ `
  type User {
    id: ID!
    email: String!
    name: String
    roles: [Int]!
  }
`;
