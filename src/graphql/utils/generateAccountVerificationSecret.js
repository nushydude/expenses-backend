// @flow
import jwt from 'jsonwebtoken';

export const CONFIG = {
  algorithm: 'HS256',
  expiresIn: '1d',
  issuer: process.env.JWT_ISSUER,
};

export function generateAccountVerificationSecret(userID) {
  return jwt.sign({ userID }, process.env.ACCOUNT_VERIFICATION_SECRET, CONFIG);
}
