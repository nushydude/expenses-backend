// @flow
import jsonwebtoken from 'jsonwebtoken';
import { env } from '../configs/env';
import { CONFIG } from './generateJWT';

export function verifyJWT(jwt: string): void {
  jsonwebtoken.verify(jwt, env.jwtSecret, CONFIG);
}
