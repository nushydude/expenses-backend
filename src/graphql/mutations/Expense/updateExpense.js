// @flow
import * as Sentry from '@sentry/node';
import mongoose from 'mongoose';
import { isEmpty } from 'ramda';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';

type UpdateExpenseArgs = {
  input: {
    expenseID: string,
    amount?: number,
    date?: string,
    paymentMethod?: string,
    type?: string,
    notes?: string,
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

  if (!userID) {
    return {
      expense: null,
      error: {
        message: 'You should be logged in to update an expense',
      },
    };
  }

  const { expenseID, ...fields } = input;

  try {
    const expense = await ctx.db.Expense.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(expenseID),
        userID: new mongoose.Types.ObjectId(userID),
      },
      {
        $set: fields,
      },
    );

    // add the potentially *new* type and paymentMethod to user
    const { type, paymentMethod } = input;
    const $addToSet = {};
    if (type) {
      $addToSet.type = type;
    }
    if (paymentMethod) {
      $addToSet.paymentMethod = paymentMethod;
    }
    if (!isEmpty($addToSet)) {
      await ctx.db.User.findByIDAndUpdate(userID, { $addToSet });
    }

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
    amount: Float
    date: DateTime
    expenseID: ID!
    notes: String
    paymentMethod: String
    type: String
  }

  type UpdateExpenseResponse implements MutationResponse {
    expense: Expense
    error: Error
  }
`;
