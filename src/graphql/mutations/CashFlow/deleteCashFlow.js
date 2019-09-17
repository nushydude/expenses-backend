// @flow
import * as Sentry from '@sentry/node';
import mongoose from 'mongoose';
import type { CashFlowMongooseRecord } from '../../../mongoose/types/CashFlow';

type DeleteCashFlowArgs = {
  input: {
    cashFlowID: string,
  },
};

type DeleteCashFlowResponse = {
  cashFlow: ?CashFlowMongooseRecord,
  error: ?{
    message: string,
  },
};

export async function deleteCashFlow(
  _: void,
  { input }: DeleteCashFlowArgs,
  ctx: any,
): Promise<DeleteCashFlowResponse> {
  const userID = ctx.user?.id;

  if (!userID) {
    return {
      cashFlow: null,
      error: {
        message: 'You should be logged in to delete an cashFlow',
      },
    };
  }

  try {
    const cashFlow = await ctx.db.CashFlow.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(input.cashFlowID),
      userID: new mongoose.Types.ObjectId(userID),
    });

    return { cashFlow, error: null };
  } catch (error) {
    Sentry.captureException(error);

    return {
      cashFlow: null,
      error: {
        message: 'Unknown error',
      },
    };
  }
}

deleteCashFlow.typeDef = /* GraphQL */ `
  extend type Mutation {
    deleteCashFlow(input: DeleteCashFlowInput!): DeleteCashFlowResponse!
  }

  input DeleteCashFlowInput {
    cashFlowID: ID!
  }

  type DeleteCashFlowResponse implements MutationResponse {
    cashFlow: CashFlow
    error: Error
  }
`;
