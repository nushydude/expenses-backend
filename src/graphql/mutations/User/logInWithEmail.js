//  @flow
import { hashPassword } from '../../utils/hashPassword';
import { emailAccountVerificationLink } from '../../utils/emailAccountVerificationLink';
import { generateJWT } from '../../utils/generateJWT';
import type { UserMongooseRecord } from '../../../mongoose/types/User';

type LogInWithEmailArgs = {
  input: {
    email: string,
    password: string,
  },
};

type LogInWithEmailResponse = {
  jwt: ?string,
  error: ?{
    message: string,
  },
};

export async function logInWithEmail(
  _: void,
  { input }: LogInWithEmailArgs,
  ctx: any,
): Promise<LogInWithEmailResponse> {
  const { email, password } = input;

  try {
    // hash the password
    const passwordHash = await hashPassword(password);

    // find the user record
    const user = await ctx.db.User.findOne({
      email,
      passwordHash,
    });

    // if not user is found, return error
    if (!user) {
      return {
        jwt: null,
        error: {
          message: 'User not found',
        },
      };
    }

    // if the user account is not verified, resend the verification link
    if (!user.verified) {
      await emailAccountVerificationLink(user);

      return {
        jwt: null,
        error: {
          message: 'Account not verified. Verification email sent',
        },
      };
    }

    // generate a jwt
    const jwt = generateJWT(user);

    return { jwt, error: null };
  } catch (error) {
    return {
      jwt: null,
      error: { message: 'An unexpected error occurred' },
    };
  }
}

logInWithEmail.typeDef = /* GraphQL */ `
  extend type Mutation {
    logInWithEmail(input: LogInWithEmailInput!): LogInWithEmailResponse!
  }

  input LogInWithEmailInput {
    email: String!
    password: String!
  }

  type LogInWithEmailResponse implements MutationResponse {
    jwt: String
    error: Error
  }
`;
