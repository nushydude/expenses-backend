// @flow
import * as Sentry from '@sentry/node';
import mongoose from 'mongoose';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';

type DeleteExpenseArgs = {
  input: {
    expenseID: string,
  },
};

type DeleteExpenseResponse = {
  expense: ?ExpenseMongooseRecord,
  error: ?{
    message: string,
  },
};

export async function deleteExpense(
  _: void,
  { input }: DeleteExpenseArgs,
  ctx: any,
): Promise<DeleteExpenseResponse> {
  const userID = ctx.user?.id;

  try {
    const expense = await ctx.db.Expense.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(input.expenseID),
      userID: new mongoose.Types.ObjectId(input.expenseID),
    });

    return { expense, error: null };
  } catch (error) {
    Sentry.captureException(error);

    return {
      expense: null,
      error: {
        message: 'Unknown error',
      },
    };
  }
}

deleteExpense.typeDef = /* GraphQL */ `
  extend type Mutation {
    deleteExpense(input: DeleteExpenseInput!): DeleteExpenseResponse!
  }

  input DeleteExpenseInput {
    expenseID: ID!
  }

  type DeleteExpenseResponse implements MutationResponse {
    expense: Expense
    error: Error
  }
`;
