import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Expense {
    amount: Float
    date: String
    id: ID
    paymentMethod: String
    type: String
  }

  type EnvVars {
    secret: String
  }

  type Query {
    getExpenses(input: GetExpensesInput!): [Expense]!
    getEnvVars(input: GetEnvVarsInput!): EnvVars!
  }

  input GetExpensesInput {
    """
    dummy field.
    """
    _: Boolean
  }

  input GetEnvVarsInput {
    """
    dummy field.
    """
    _: Boolean
  }

  type Error {
    message: String!
  }

  interface MutationResponse {
    error: Error
  }

  type Mutation {
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
