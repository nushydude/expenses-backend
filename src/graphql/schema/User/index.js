// @flow
export const User = {};

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
    paymentMethods: [String]!
    types: [String]!
  }
`;
