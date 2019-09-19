// @flow
import jwt from 'jsonwebtoken';
import { env } from '../../configs/env';
import { CONFIG } from './generateAccountVerificationSecret';

export function validateAccountVerificationSecret(
  verificationSecret: string,
): void {
  const { algorithm, issuer } = CONFIG;

  jwt.verify(verificationSecret, env.accountVerificationSecret, {
    issuer,
    algorithms: [algorithm],
  });
}
