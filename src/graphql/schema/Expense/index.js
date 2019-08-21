// @flow
export const Expense = {};

export const typeDef = /* GraphQL */ `
  type Expense {
    amount: Float
    date: String
    id: ID
    paymentMethod: String
    type: String
  }
`;
