// @flow
import jwt from 'jsonwebtoken';
import { env } from '../../configs/env';
import { CONFIG } from './generateAccountVerificationSecret';

export function validateAccountVerificationSecret(
  verificationSecret: string,
): void {
  jwt.verify(verificationSecret, env.accountVerificationSecret, CONFIG);
}
