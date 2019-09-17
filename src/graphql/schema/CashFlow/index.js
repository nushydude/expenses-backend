// @flow
import type { CashFlowMongooseRecord } from '../../../mongoose/types/CashFlow';
import { user } from './user';

export const CashFlow = {
  id: (parent: CashFlowMongooseRecord) => parent._id.toString(),
  user,
};

export const typeDef = /* GraphQL */ `
  enum CashFlowType {
    EXPENSE
    INCOME
  }

  type CashFlow {
    amount: Float!
    category: String!
    date: DateTime!
    id: ID!
    notes: String
    source: String!
    type: CashFlowType!
    user: User!
  }
`;
