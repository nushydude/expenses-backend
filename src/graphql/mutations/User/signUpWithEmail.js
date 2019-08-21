// @flow
import { isEmail } from 'validator';
import { hashPassword } from '../../utils/hashPassword';
import { emailAccountVerificationLink } from '../../utils/emailAccountVerificationLink';

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
    const passwordHash = await hashPassword(password);

    // create the user record
    const user = await ctx.db.User.create({
      email,
      passwordHash,
      name,
    });

    await emailAccountVerificationLink(user);

    return { created: true, error: null };
  } catch (error) {
    return {
      created: false,
      error: { message: 'An unexpected error occurred' },
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
