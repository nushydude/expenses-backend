// @flow
import mongoose from 'mongoose';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';

type GetExpensesArgs = {
  to: Date,
  from: Date,
};

export async function getExpenses(
  _: void,
  { input }: GetExpensesArgs,
  ctx: any,
): Promise<Array<ExpenseMongooseRecord>> {
  const userID = ctx.user?.id;

  if (!userID) {
    return [];
  }

  const criteria: any = {
    userID: new mongoose.Types.ObjectId(userID),
  };

  const { to, from } = input;

  if (to) {
    criteria.date = { $lt: to };
  }

  if (from) {
    criteria.date = { ...criteria.date, $gte: from };
  }

  const expenses = await ctx.db.Expense.find(criteria);

  return expenses;
}

getExpenses.typeDef = /* GraphQL */ `
  extend type Query {
    getExpenses(input: GetExpensesInput!): [Expense]!
  }

  input GetExpensesInput {
    to: DateTime
    from: DateTime
  }
`;
