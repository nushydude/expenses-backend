// @flow
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';
import { user } from './user';

export const Expense = {
  id: (parent: ExpenseMongooseRecord) => parent._id.toString(),
  user,
};

export const typeDef = /* GraphQL */ `
  type Expense {
    amount: Float!
    date: DateTime!
    id: ID!
    notes: String
    paymentMethod: String
    type: String
    user: User!
  }
`;
