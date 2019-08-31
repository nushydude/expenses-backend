// @flow
import * as Sentry from '@sentry/node';
import upash from 'upash';
import { isEmail } from 'validator';
import { emailAccountVerificationLink } from '../../utils/emailAccountVerificationLink';
import { isMongoDBConflictError } from '../../../errors/matchers/isMongoDBConflictError';

type SignUpWithEmailArgs = {
  input: {
    email: string,
    name: string,
    password: string,
  },
};

type SignUpWithEmailResponse = {
  created: boolean,
  error: ?{
    message: string,
  },
};

export async function signUpWithEmail(
  _: void,
  { input }: SignUpWithEmailArgs,
  ctx: any,
): Promise<SignUpWithEmailResponse> {
  const { email, password, name } = input;

  if (!isEmail(email)) {
    return {
      created: false,
      error: { message: 'Provided email is not an email' },
    };
  }

  if (password.length < 6) {
    return {
      created: false,
      error: { message: 'Provided password is too short' },
    };
  }

  try {
    // hash the password
    const passwordHash = await upash.use('argon2').hash(password);

    // create the user record
    const user = await ctx.db.User.create({
      email,
      passwordHash,
      name,
    });

    await emailAccountVerificationLink(user);

    return { created: true, error: null };
  } catch (error) {
    if (isMongoDBConflictError(error)) {
      return {
        created: false,
        error: {
          message:
            'An account with the same email exists. Please log in instead.',
        },
      };
    }

    Sentry.captureException(error);

    return {
      created: false,
      error: {
        message: 'Unknown error',
      },
    };
  }
}

signUpWithEmail.typeDef = /* GraphQL */ `
  extend type Mutation {
    signUpWithEmail(input: SignUpWithEmailInput!): SignUpWithEmailResponse!
  }

  input SignUpWithEmailInput {
    email: String!
    password: String!
    name: String!
  }

  type SignUpWithEmailResponse implements MutationResponse {
    created: Boolean!
    error: Error
  }
`;
