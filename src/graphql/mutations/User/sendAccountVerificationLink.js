// @flow
import { emailAccountVerificationLink } from '../../utils/emailAccountVerificationLink';
import { generateAccountVerificationSecret } from '../../utils/generateAccountVerificationSecret';

type SendAccountVerificationLinkArgs = {
  input: {
    email: string,
  },
};

type SendAccountVerificationLinkResponse = {
  error: ?{
    message: string,
  },
};

export async function sendAccountVerificationLink(
  _: void,
  { input }: SendAccountVerificationLinkArgs,
  ctx: any,
): Promise<SendAccountVerificationLinkResponse> {
  let user;

  try {
    user = await ctx.db.User.findOne({ email: input.email }, ctx);

    if (!user) {
      return {
        error: {
          message: 'The account you are trying to verify is not found',
        },
      };
    }

    if (user.verified) {
      return {
        error: {
          message: 'The account you are trying to verify is already verified',
        },
      };
    }

    // create a secret to reset the password
    const verificationSecret = generateAccountVerificationSecret(user);

    // store it in the user record
    user = await ctx.db.User.findByIDAndUpdate(
      user._id,
      { $set: { verificationSecret } },
      ctx,
    );

    // email the reset password link
    await emailAccountVerificationLink(user);

    return { error: null };
  } catch (error) {
    return {
      error: {
        message: 'An unexpected error occurred.',
      },
    };
  }
}

sendAccountVerificationLink.typeDef = /* GraphQL */ `
  extend type Mutation {
    sendAccountVerificationLink(
      input: SendAccountVerificationLinkInput!
    ): SendAccountVerificationLinkResponse!
  }

  input SendAccountVerificationLinkInput {
    email: String!
  }

  type SendAccountVerificationLinkResponse implements MutationResponse {
    error: Error
  }
`;
