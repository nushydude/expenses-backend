import { emailPasswordResetLink } from '../../utils/emailPasswordResetLink';
import { generatePasswordResetSecret } from '../../utils/generatePasswordResetSecret';

type SendResetPasswordLinkArgs = {
  input: {
    email: string,
  },
};

type SendResetPasswordLinkResponse = {
  error: ?{
    message: string,
  },
};

export async function sendResetPasswordLink(
  _: void,
  { input }: SendResetPasswordLinkArgs,
  ctx: any,
): Promise<SendResetPasswordLinkResponse> {
  let user;

  try {
    user = await ctx.db.User.findOne({ email: input.email }, ctx);

    if (!user) {
      return {
        error: {
          message:
            'The user account you are trying to reset the password cannot be found',
        },
      };
    }

    // create a secret to reset the password
    const resetPasswordSecret = generatePasswordResetSecret(user);

    // store it in the user record
    user = await ctx.db.User.findByIDAndUpdate(
      user._id,
      { $set: { resetPasswordSecret } },
      ctx,
    );

    return { error: null };
  } catch (error) {
    return {
      error: {
        message: 'An unexpected error occurred',
      },
    };
  }
}

sendResetPasswordLink.typeDef = /* GraphQL */ `
  extend type Mutation {
    sendResetPasswordLink(
      input: SendResetPasswordLinkInput!
    ): SendResetPasswordLinkResponse!
  }

  input SendResetPasswordLinkInput {
    email: String!
  }

  type SendResetPasswordLinkResponse implements MutationResponse {
    error: Error
  }
`;
