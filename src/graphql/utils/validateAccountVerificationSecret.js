// @flow
import jwt from 'jsonwebtoken';
import { env } from '../../configs/env';
import { CONFIG } from './generateAccountVerificationSecret';

export function validateAccountVerificationSecret(
  verificationSecret: string,
): ?string {
  const { algorithm, issuer } = CONFIG;

  const decoded = jwt.verify(
    verificationSecret,
    env.accountVerificationSecret,
    {
      issuer,
      algorithms: [algorithm],
    },
  );

  return decoded?.userID;
}
