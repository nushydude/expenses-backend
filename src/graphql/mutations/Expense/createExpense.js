// @flow
import * as Sentry from '@sentry/node';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';

type CreateExpenseArgs = {
  input: {
    amount: number,
    date: string,
    paymentMethod: string,
    type: string,
    notes?: string,
  },
};

type CreateExpenseResponse = {
  expense: ?ExpenseMongooseRecord,
  error: ?{
    message: string,
  },
};

export async function createExpense(
  _: void,
  { input }: CreateExpenseArgs,
  ctx: any,
): Promise<CreateExpenseResponse> {
  const userID = ctx.user?.id;

  if (!userID) {
    return {
      expense: null,
      error: {
        message: 'You need to be logged in to create an expense',
      },
    };
  }

  try {
    // TODO:
    // this should be a transaction

    // create the expense
    const expense = await ctx.db.Expense.create({ ...input, userID });

    const { type, paymentMethod } = input;

    // add the type and payment method to the user acccount
    await ctx.db.User.findByIDAndUpdate(userID, {
      $addToSet: {
        types: type,
        paymentMethods: paymentMethod,
      },
    });

    return { expense, error: null };
  } catch (error) {
    console.log('error:', error.message);

    Sentry.captureException(error);

    return {
      expense: null,
      error: {
        message: 'Unknown error',
      },
    };
  }
}

createExpense.typeDef = /* GraphQL */ `
  extend type Mutation {
    createExpense(input: CreateExpenseInput!): CreateExpenseResponse!
  }

  input CreateExpenseInput {
    amount: Float!
    date: String!
    paymentMethod: String!
    type: String!
    notes: String
  }

  type CreateExpenseResponse implements MutationResponse {
    expense: Expense
    error: Error
  }
`;
