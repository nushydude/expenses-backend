// @flow
import jsonwebtoken from 'jsonwebtoken';
import type { UserMongooseRecord } from '../../mongoose/types/User';

export const CONFIG = {
  algorithm: 'HS256',
  expiresIn: '30d',
  issuer: process.env.JWT_ISSUER,
};

export function generateJWT(user: UserMongooseRecord): string {
  return jsonwebtoken.sign(
    {
      userID: user._id.toString(),
      roles: user.roles,
    },
    process.env.JWT_SECRET,
    CONFIG,
  );
}
