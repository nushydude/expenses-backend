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
    // verify the secret
    const userID = validateAccountVerificationSecret(verificationSecret);

    if (!userID) {
      return {
        verified: false,
        error: {
          message: 'Unable to verify the account. Please try again.',
        },
      };
    }

    // query the user with the userID extracted from the secret
    let user = await ctx.db.User.findByID(userID, ctx);

    if (!user) {
      return {
        verified: false,
        error: {
          message: 'The account you are trying to verify does not exist',
        },
      };
    }

    // don't complain if the user is already verified. just pass.
    if (user.verified) {
      return { verified: true, error: null };
    }

    user = await ctx.db.User.findByIDAndUpdate(
      user._id,
      {
        $set: { verified: true },
      },
      ctx,
    );

    if (!user) {
      throw new Error('Setting verified flag on the user account failed.');
    }

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
