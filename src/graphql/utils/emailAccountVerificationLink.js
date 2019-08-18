// @flow
import invariant from 'invariant';
import sgMail from '@sendgrid/mail';
import { EMAIL_ADDRESS } from '../../enums/emailAddress';
import { EMAIL_CATEGORY } from '../../enums/emailCategory';

export function emailAccountVerificationLink(user) {
  invariant(
    user.email && user.verificationSecret,
    'user.email and user.verificationSecret should be defined',
  );

  sgMail.send({
    from: {
      name: 'Expenses App',
      email: EMAIL_ADDRESS.NO_REPLY,
    },
    to: user.email,
    substitutions: {
      link: `${process.env.ACCOUNT_VERIFICATION_URL}?secret=${user.verificationSecret}`,
      name: user.name || 'there',
    },
    text: verifyAccountTemplate,
    subject: 'Expenses App Account Verification',
    categories: [EMAIL_CATEGORY.VERIFY_ACCOUNT],
  });
}

const verifyAccountTemplate = `
Hi {{name}},

Please verify your email address by clicking the following link.

To maintain your security, this link expires in 1 day.

{{link}}

Not meant to receive this message? Just ignore this email.

Thanks,

Expenses App`;
