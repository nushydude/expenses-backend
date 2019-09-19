// @flow
import mongoose from 'mongoose';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';

type GetExpenseArgs = {
  input: {
    expenseID: string,
  },
};

export async function getExpense(
  _: void,
  { input }: GetExpenseArgs,
  ctx: any,
): Promise<?ExpenseMongooseRecord> {
  const userID = ctx.user?.id;

  if (!userID) {
    return null;
  }

  const criteria: any = {
    _id: mongoose.Types.ObjectId(input.expenseID),
    userID: new mongoose.Types.ObjectId(userID),
  };

  const expense = await ctx.db.Expense.findOne(criteria);

  return expense;
}

getExpense.typeDef = /* GraphQL */ `
  extend type Query {
    getExpense(input: GetExpenseInput!): Expense
  }

  input GetExpenseInput {
    expenseID: ID!
  }
`;
