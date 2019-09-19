// @flow
import mongoose from 'mongoose';
import type { CashFlowMongooseRecord } from '../../../mongoose/types/CashFlow';

type GetCashFlowArgs = {
  input: {
    cashFlowID: string,
  },
};

export async function getCashFlow(
  _: void,
  { input }: GetCashFlowArgs,
  ctx: any,
): Promise<?CashFlowMongooseRecord> {
  const userID = ctx.user?.id;

  if (!userID) {
    return null;
  }

  const criteria: any = {
    _id: new mongoose.Types.ObjectId(input.cashFlowID),
    userID: new mongoose.Types.ObjectId(userID),
  };

  const cashFlow = await ctx.db.CashFlow.findOne(criteria);

  return cashFlow;
}

getCashFlow.typeDef = /* GraphQL */ `
  extend type Query {
    getCashFlow(input: GetCashFlowInput!): CashFlow
  }

  input GetCashFlowInput {
    cashFlowID: ID!
  }
`;
