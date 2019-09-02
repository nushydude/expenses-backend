// @flow
import * as Sentry from '@sentry/node';
import mongoose from 'mongoose';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';

type UpdateExpenseArgs = {
  input: {
    expenseID: string,
    amount?: number,
    date?: string,
    paymentMethod?: string,
    type?: string,
  },
};

type UpdateExpenseResponse = {
  expense: ?ExpenseMongooseRecord,
  error: ?{
    message: string,
  },
};

export async function updateExpense(
  _: void,
  { input }: UpdateExpenseArgs,
  ctx: any,
): Promise<UpdateExpenseResponse> {
  const userID = ctx.user?.id;

  const { expenseID, ...fields } = input;

  try {
    const expense = await ctx.db.Expense.findOneAndUpdate(
      {
        _id: mongoose.Types.ObjectId(expenseID),
        userID: mongoose.Types.ObjectId(userID),
      },
      {
        $set: fields,
      },
    );

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

updateExpense.typeDef = /* GraphQL */ `
  extend type Mutation {
    updateExpense(input: UpdateExpenseInput!): UpdateExpenseResponse!
  }

  input UpdateExpenseInput {
    expenseID: ID!
    amount: Float
    date: String
    paymentMethod: String
    type: String
  }

  type UpdateExpenseResponse implements MutationResponse {
    expense: Expense
    error: Error
  }
`;
