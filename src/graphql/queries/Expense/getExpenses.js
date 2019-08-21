// @flow
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';

export async function getExpenses(
  _: void,
  args: void,
  ctx: any,
): Promise<Array<ExpenseMongooseRecord>> {
  const expenses = await ctx.db.Expense.find({});

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
