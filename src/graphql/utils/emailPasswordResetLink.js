// @flow
import invariant from 'invariant';
import sgMail from '@sendgrid/mail';
import { EMAIL_ADDRESS } from '../../enums/emailAddress';
import { EMAIL_CATEGORY } from '../../enums/emailCategory';
import type { UserMongooseRecord } from '../../mongoose/types/User';

export function emailPasswordResetLink(
  user: UserMongooseRecord,
): Promise<void> {
  invariant(
    user.email && user.resetPasswordSecret,
    'user.email and user.resetPasswordSecret should be defined',
  );

  return sgMail.send({
    from: {
      name: 'Expenses App',
      email: EMAIL_ADDRESS.NO_REPLY,
    },
    to: user.email,
    substitutions: {
      // $FlowFixMe
      link: `${process.env.PASSWORD_RESET_URL}?secret=${user.resetPasswordSecret}`,
      name: user.name || 'there',
    },
    text: resetPasswordEmailTemplate,
    subject: 'Password reset for your Expenses App account',
    categories: [EMAIL_CATEGORY.RESET_PASSWORD],
  });
}

const resetPasswordEmailTemplate = `
Hi {{name}},

Please verify that tou want to reset your password by clicking the following link.


To maintain your security, this link expires in 30 minutes.

{{link}}


Not meant to receive this message? Just ignore this email.

Expenses App`;
