// @flow
import jwt from 'jsonwebtoken';
import type { UserMongooseRecord } from '../../mongoose/types/User';

export const CONFIG = {
  algorithm: 'HS256',
  expiresIn: '1d',
  issuer: process.env.JWT_ISSUER,
};

export function generateAccountVerificationSecret(
  user: UserMongooseRecord,
): string {
  const userID = user._id.toString();

  return jwt.sign({ userID }, process.env.ACCOUNT_VERIFICATION_SECRET, CONFIG);
}
