// @flow
import * as Sentry from '@sentry/node';
import type { CashFlowMongooseRecord } from '../../../mongoose/types/CashFlow';

type CreateCashFlowArgs = {
  input: {
    amount: number,
    date: string,
    paymentMethod: string,
    type: string,
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
    // TODO:
    // this should be a transaction

    // create the cashFlow
    const cashFlow = await ctx.db.CashFlow.create({ ...input, userID });

    const { type, paymentMethod } = input;

    // add the type and payment method to the user acccount
    await ctx.db.User.findByIDAndUpdate(userID, {
      $addToSet: {
        types: type,
        paymentMethods: paymentMethod,
      },
    });

    return { cashFlow, error: null };
  } catch (error) {
    console.log('error:', error.message);

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
