// @flow
import jwt from 'jsonwebtoken';
import { CONFIG } from './generateAccountVerificationSecret';

export function validateAccountVerificationSecret(
  verificationSecret: string,
): void {
  jwt.verify(
    verificationSecret,
    process.env.ACCOUNT_VERIFICATION_SECRET,
    CONFIG,
  );
}
