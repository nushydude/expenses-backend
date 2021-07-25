// @flow
import jsonwebtoken from 'jsonwebtoken';
import { env } from '../configs/env';
import { CONFIG } from './generateJWT';

type Decoded = {
  id: string,
  roles: Array<Role>,
};

export function verifyJWT(jwt: string): User | null {
  const { issuer, algorithm } = CONFIG;

  try {
    const decoded: Decoded = jsonwebtoken.verify(jwt, env.jwtSecret, {
      issuer,
      algorithms: [algorithm],
    });

    return decoded;
  } catch (error) {
    return null;
  }
}
