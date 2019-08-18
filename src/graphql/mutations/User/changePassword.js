// @flow
import invariant from 'invariant';
import upash from 'upash';
import { validatePasswordResetSecret } from '../../utils/validatePasswordResetSecret';

export async function changePassword(root, { input }, ctx) {
  const { resetPasswordSecret, confirmPassword, password } = input;

  try {
    validatePasswordResetSecret(resetPasswordSecret);

    let user = await ctx.db.User.findOne({ resetPasswordSecret }, ctx);

    if (!user) {
      return {
        passwordChanged: false,
        error: {
          message:
            'The account you are trying to change password of cannot be found',
        },
      };
    }

    if (confirmPassword !== password) {
      return {
        passwordChanged: false,
        error: {
          message:
            'The provied password field and the confirm password field do not match',
        },
      };
    }

    if (password.length < 6) {
      return {
        passwordChanged: false,
        error: {
          message: 'The provided password is not long enough',
        },
      };
    }

    const passwordHash = await upash.use('argon2').hash(password);

    user = await ctx.db.User.findByIDAndUpdate(
      user._id,
      {
        $set: { passwordHash },
        $unset: { resetPasswordSecret: true },
      },
      ctx,
    );

    invariant(user, 'user should be defined');

    return { passwordChanged: true, error: null };
  } catch (error) {
    return {
      passwordChanged: false,
      error: {
        message: 'An unexpected error occurred',
      },
    };
  }
}

changePassword.typeDef = /* GraphQL */ `
  extend type Mutation {
    changePassword(input: ChangePasswordInput!): ChangePasswordResponse!
  }

  input ChangePasswordInput {
    confirmPassword: String!
    password: String!
    resetPasswordSecret: String!
  }

  type ChangePasswordResponse implements MutationResponse {
    passwordChanged: Boolean!
    error: Error
  }
`;
