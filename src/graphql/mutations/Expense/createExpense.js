// @flow
import * as Sentry from '@sentry/node';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';

type CreateExpenseArgs = {
  input: {
    amount: number,
    date: string,
    paymentMethod: string,
    type: string,
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

  try {
    const expense = await ctx.db.Expense.create({ ...input, userID });

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

createExpense.typeDef = /* GraphQL */ `
  extend type Mutation {
    createExpense(input: CreateExpenseInput!): CreateExpenseResponse!
  }

  input CreateExpenseInput {
    amount: Float!
    date: String!
    paymentMethod: String!
    type: String!
  }

  type CreateExpenseResponse implements MutationResponse {
    expense: Expense
    error: Error
  }
`;
