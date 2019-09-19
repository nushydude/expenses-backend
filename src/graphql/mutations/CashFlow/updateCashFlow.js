// @flow
import * as Sentry from '@sentry/node';
import mongoose from 'mongoose';
import { isEmpty } from 'ramda';
import type { CashFlowMongooseRecord } from '../../../mongoose/types/CashFlow';
import type { CashFlowType } from '../../../enums/cashFlowType';

type UpdateCashFlowArgs = {
  input: {
    cashFlowID: string,
    amount?: number,
    date?: string,
    source?: string,
    category?: string,
    notes?: string,
    type?: CashFlowType,
  },
};

type UpdateCashFlowResponse = {
  cashFlow: ?CashFlowMongooseRecord,
  error: ?{
    message: string,
  },
};

export async function updateCashFlow(
  _: void,
  { input }: UpdateCashFlowArgs,
  ctx: any,
): Promise<UpdateCashFlowResponse> {
  const userID = ctx.user?.id;

  if (!userID) {
    return {
      cashFlow: null,
      error: {
        message: 'You should be logged in to update an cashFlow',
      },
    };
  }

  const { cashFlowID, ...fields } = input;

  try {
    const cashFlow = await ctx.db.CashFlow.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(cashFlowID),
        userID: new mongoose.Types.ObjectId(userID),
      },
      {
        $set: fields,
      },
    );

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

updateCashFlow.typeDef = /* GraphQL */ `
  extend type Mutation {
    updateCashFlow(input: UpdateCashFlowInput!): UpdateCashFlowResponse!
  }

  input UpdateCashFlowInput {
    amount: Float
    date: DateTime
    cashFlowID: ID!
    notes: String
    source: String
    category: String
    type: CashFlowType
  }

  type UpdateCashFlowResponse implements MutationResponse {
    cashFlow: CashFlow
    error: Error
  }
`;
