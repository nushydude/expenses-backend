// @flow
import invariant from 'invariant';
import sgMail from '@sendgrid/mail';
import { env } from '../../configs/env';
import { EMAIL_ADDRESS } from '../../enums/emailAddress';
import { EMAIL_CATEGORY } from '../../enums/emailCategory';
import type { UserMongooseRecord } from '../../mongoose/types/User';
import { generateAccountVerificationSecret } from './generateAccountVerificationSecret';

type User = {
  id: string,
  email: string,
  name: string,
};

type Result = {
  sent: boolean,
  secret: string,
};

export async function emailAccountVerificationLink(
  user: User,
): Promise<Result> {
  invariant(user.email, 'user.email should be defined');

  const secret = generateAccountVerificationSecret(user);

  let sent = false;

  try {
    await sgMail.send({
      from: {
        name: 'Expenses App',
        email: EMAIL_ADDRESS.NO_REPLY,
      },
      to: user.email,
      substitutions: {
        // $FlowFixMe
        link: `${env.accountVerificationURL}?secret=${secret}`,
        name: user.name,
      },
      text: verifyAccountTemplate,
      subject: 'Expenses App Account Verification',
      categories: [EMAIL_CATEGORY.VERIFY_ACCOUNT],
    });

    sent = true;
  } catch (error) {
    sent = false;
  }

  return { secret, sent };
}

const verifyAccountTemplate = `
Hi {{name}},

Please verify your email address by clicking the following link.

To maintain your security, this link expires in 1 day.

{{link}}

Not meant to receive this message? Just ignore this email.

Thanks,

Expenses App`;
