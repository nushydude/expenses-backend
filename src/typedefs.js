const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Expense {
    amount: String!
    date: String!
    id: Int!
    paymentMethod: String!
    type: String!
  }

  type Query {
    getExpenses(input: GetExpensesInput!): [Expense]
  }

  input GetExpensesInput {
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
    addExpense(input: AddExpenseInput!): Expense!
  }

  input AddExpenseInput {
    amount: String!
    date: String!
    paymentMethod: String!
    type: String!
  }

  type AddExpenseResponse implements MutationResponse {
    expense: Expense
    error: Error
  }
`;

module.exports = typeDefs;
