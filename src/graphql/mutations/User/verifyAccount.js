// @flow
import * as Sentry from '@sentry/node';
import invariant from 'invariant';
import { validateAccountVerificationSecret } from '../../utils/validateAccountVerificationSecret';

type VerifyAccountArgs = {
  input: {
    verificationSecret: string,
  },
};

type VerifyAccountResponse = {
  verified: boolean,
  error: ?{
    message: string,
  },
};

export async function verifyAccount(
  _: void,
  { input }: VerifyAccountArgs,
  ctx: any,
): Promise<VerifyAccountResponse> {
  const { verificationSecret } = input;

  try {
    validateAccountVerificationSecret(verificationSecret);

    let user = await ctx.db.User.findOne({ verificationSecret }, ctx);

    if (!user) {
      return {
        verified: false,
        error: {
          message: 'The account you are trying to verify cannot be found',
        },
      };
    }

    if (user.verified) {
      return { verified: true, error: null };
    }

    user = await ctx.db.User.findByIDAndUpdate(
      user._id,
      {
        $set: { verified: true },
        $unset: { verificationSecret: true },
      },
      ctx,
    );

    invariant(user, 'user should be defined');

    return { verified: user.verified, error: null };
  } catch (error) {
    Sentry.captureException(error);

    return {
      verified: false,
      error: {
        message: 'Unknown error',
      },
    };
  }
}

verifyAccount.typeDef = /* GraphQL */ `
  extend type Mutation {
    verifyAccount(input: VerifyAccountInput!): VerifyAccountResponse!
  }

  input VerifyAccountInput {
    verificationSecret: String!
  }

  type VerifyAccountResponse implements MutationResponse {
    error: Error
    verified: Boolean!
  }
`;
