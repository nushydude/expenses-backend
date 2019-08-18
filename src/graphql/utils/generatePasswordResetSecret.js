// @flow
import jwt from 'jsonwebtoken';

export const CONFIG = {
  algorithm: 'HS256',
  expiresIn: '30m',
  issuer: process.env.JWT_ISSUER,
};

export function generatePasswordResetSecret(userID) {
  return jwt.sign({ userID }, process.env.PASSWORD_RESET_SECRET, CONFIG);
}
