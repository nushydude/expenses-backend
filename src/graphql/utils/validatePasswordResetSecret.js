// @flow
import jwt from 'jsonwebtoken';
import { env } from '../../configs/env';
import { CONFIG } from './generatePasswordResetSecret';

export function validatePasswordResetSecret(verificationSecret: string): void {
  jwt.verify(verificationSecret, env.passwordResetSecret, CONFIG);
}
