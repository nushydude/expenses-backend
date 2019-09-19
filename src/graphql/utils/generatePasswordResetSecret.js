// @flow
import jwt from 'jsonwebtoken';
import { env } from '../../configs/env';
import type { UserMongooseRecord } from '../../mongoose/types/User';

export const CONFIG = {
  algorithm: 'HS256',
  expiresIn: '30m',
  issuer: env.jwtIssuer,
};

export function generatePasswordResetSecret(user: UserMongooseRecord): string {
  const userID = user._id.toString();

  return jwt.sign({ userID }, env.passwordResetSecret, CONFIG);
}
