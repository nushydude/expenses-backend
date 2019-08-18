import invariant from 'invariant';
import sgMail from '@sendgrid/mail';
import { EMAIL_ADDRESS } from '../../enums/emailAddress';
import { EMAIL_CATEGORY } from '../../enums/emailCategory';

export function emailPasswordResetLink(user) {
  invariant(
    user.email && user.resetPasswordSecret,
    'user.email and user.resetPasswordSecret should be defined',
  );

  sendMail({
    from: {
      name: 'Expenses App',
      email: EMAIL_ADDRESS.NO_REPLY,
    },
    to: user.email,
    substitutions: {
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
