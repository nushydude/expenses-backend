// @flow
import * as Sentry from '@sentry/node';
import { emailAccountVerificationLink } from '../../utils/emailAccountVerificationLink';

type SendAccountVerificationLinkArgs = {
  input: {
    email: string,
  },
};

type SendAccountVerificationLinkResponse = {
  sent: boolean,
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
        sent: false,
        secret: null,
        error: {
          message: 'The account you are trying to verify does not exist',
        },
      };
    }

    if (user.verified) {
      return {
        sent: false,
        secret: null,
        error: {
          message: 'The account you are trying to verify is already verified',
        },
      };
    }

    // email the reset password link
    const { secret, sent } = await emailAccountVerificationLink(user);

    return { sent, secret, error: null };
  } catch (error) {
    Sentry.captureException(error);

    return {
      sent: false,
      secret: null,
      error: {
        message: 'Unknown error',
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
    sent: Boolean!
    secret: String
    error: Error
  }
`;
