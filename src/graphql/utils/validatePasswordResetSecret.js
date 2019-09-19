// @flow
import jwt from 'jsonwebtoken';
import { env } from '../../configs/env';
import { CONFIG } from './generatePasswordResetSecret';

export function validatePasswordResetSecret(verificationSecret: string): void {
  const { algorithm, issuer } = CONFIG;

  jwt.verify(verificationSecret, env.passwordResetSecret, {
    issuer,
    algorithms: [algorithm],
  });
}
