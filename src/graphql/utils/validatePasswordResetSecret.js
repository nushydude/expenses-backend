// @flow
import jwt from 'jsonwebtoken';
import { CONFIG } from './generatePasswordResetSecret';

export function validatePasswordResetSecret(verificationSecret: string): void {
  jwt.verify(verificationSecret, process.env.PASSWORD_RESET_SECRET, CONFIG);
}
