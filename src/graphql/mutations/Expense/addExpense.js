// @flow
import cuid from 'cuid';
import { expenses } from '../../../dataStore';

export function addExpense(_, { input }) {
  const expense = { ...input, id: cuid() };

  expenses.push(expense);

  return {
    expense,
    error: null,
  };
}

addExpense.typeDef = /* GraphQL */ `
  extend type Mutation {
    addExpense(input: AddExpenseInput!): AddExpenseResponse!
  }

  input AddExpenseInput {
    amount: Float!
    date: String!
    paymentMethod: String!
    type: String!
  }

  type AddExpenseResponse implements MutationResponse {
    expense: Expense
    error: Error
  }
`;
