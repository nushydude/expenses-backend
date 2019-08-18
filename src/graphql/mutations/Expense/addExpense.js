// import cuid from 'cuid';
// import { expenses } from '../../../dataStore';

export async function addExpense(_, { input }, ctx) {
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
