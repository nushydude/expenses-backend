// @flow
import * as Sentry from '@sentry/node';
import type { CashFlowMongooseRecord } from '../../../mongoose/types/CashFlow';

type CreateCashFlowArgs = {
  input: {
    amount: number,
    date: string,
    source: string,
    category: string,
    notes?: string,
  },
};

type CreateCashFlowResponse = {
  cashFlow: ?CashFlowMongooseRecord,
  error: ?{
    message: string,
  },
};

export async function createCashFlow(
  _: void,
  { input }: CreateCashFlowArgs,
  ctx: any,
): Promise<CreateCashFlowResponse> {
  const userID = ctx.user?.id;

  if (!userID) {
    return {
      cashFlow: null,
      error: {
        message: 'You should be logged in to create an cashFlow',
      },
    };
  }

  try {
    const cashFlow = await ctx.db.CashFlow.create({ ...input, userID });

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

createCashFlow.typeDef = /* GraphQL */ `
  extend type Mutation {
    createCashFlow(input: CreateCashFlowInput!): CreateCashFlowResponse!
  }

  input CreateCashFlowInput {
    amount: Float!
    date: DateTime!
    source: String!
    category: String!
    notes: String
    type: CashFlowType!
  }

  type CreateCashFlowResponse implements MutationResponse {
    cashFlow: CashFlow
    error: Error
  }
`;
