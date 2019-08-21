// @flow
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';

type AddExpenseArgs = {
  input: {
    amount: number,
    date: string,
    paymentMethod: string,
    type: string,
  },
};

type AddExpenseResponse = {
  expense: ?ExpenseMongooseRecord,
  error: ?{
    message: string,
  },
};

export async function addExpense(
  _: void,
  { input }: AddExpenseArgs,
  ctx: any,
): Promise<AddExpenseResponse> {
  try {
    const expense = await ctx.db.Expense.create(input);

    return { expense, error: null };
  } catch (error) {
    return {
      expense: null,
      error: {
        message: error.message,
      },
    };
  }
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
