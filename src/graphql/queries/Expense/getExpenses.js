// @flow
import { expenses } from '../../../dataStore';

export function getExpenses() {
  return expenses;
}

getExpenses.typeDef = /* GraphQL */ `
  extend type Query {
    getExpenses(input: GetExpensesInput!): [Expense]!
  }

  input GetExpensesInput {
    """
    dummy field.
    """
    _: Boolean
  }
`;
