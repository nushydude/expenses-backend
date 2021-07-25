// @flow
import upash from 'upash';
import { isEmail } from 'validator';
import { isMongoDBConflictError } from '../../../errors/matchers/isMongoDBConflictError';
import type { UserMongooseRecord } from '../../../mongoose/types/User';
import { generateJWT } from '../../../utils/generateJWT';
import { createDuplicateAccountError } from '../../errors/createDuplicateAccountError';
import { createInvalidEmailError } from '../../errors/createInvalidEmailError';
import { createPasswordTooShortError } from '../../errors/createPasswordTooShortError';
import { createUnknownError } from '../../errors/createUnknownError';
import { emailAccountVerificationLink } from '../../utils/emailAccountVerificationLink';
import type { ErrorCode } from '../../errors/types';

type SignUpWithEmailArgs = {
  input: {
    email: string,
    name: string,
    password: string,
    requiresVerification?: Boolean,
  },
};

type SignUpWithEmailResponse = {
  created: boolean,
  jwt: ?String,
  error: ?{
    code: ErrorCode,
    message: string,
  },
};

export async function signUpWithEmail(
  _: void,
  { input }: SignUpWithEmailArgs,
  ctx: any,
): Promise<SignUpWithEmailResponse> {
  const { email, password, name, requiresVerification } = input;

  if (!isEmail(email)) {
    return {
      created: false,
      jwt: null,
      error: createInvalidEmailError(ctx),
    };
  }

  if (password.length < 6) {
    return {
      created: false,
      jwt: null,
      error: createPasswordTooShortError(ctx),
    };
  }

  try {
    // hash the password
    const passwordHash = await upash.use('argon2').hash(password);

    const userDoc: $Shape<UserMongooseRecord> = {
      email,
      passwordHash,
      name,
    };

    if (!requiresVerification) {
      userDoc.verified = true;
    }

    // create the user record
    const user = await ctx.db.User.create(userDoc);

    let jwt: string | null = null;

    if (requiresVerification) {
      // we do not send a jwt in this case.
      // the user will have to verify the account using the email sent to their account.
      // when they log in, we check if they had been verfied.
      // if they have not been verified, the verification email will be sent again.
      // once verified, they can log in.
      await emailAccountVerificationLink(user);
    } else {
      jwt = generateJWT(user);
    }

    return { created: true, jwt, error: null };
  } catch (error) {
    if (isMongoDBConflictError(error)) {
      return {
        created: false,
        error: createDuplicateAccountError(ctx),
      };
    }

    return {
      created: false,
      jwt: null,
      error: createUnkn0ownError(error, ctx),
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
    requiresVerification: Boolean
  }

  type SignUpWithEmailResponse implements MutationResponse {
    created: Boolean!
    jwt: String
    error: Error
  }
`;
