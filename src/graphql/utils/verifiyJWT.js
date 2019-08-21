// @flow
import jsonwebtoken from 'jsonwebtoken';
import { CONFIG } from './generateJWT';

export function verifyJWT(jwt: string): void {
  jsonwebtoken.verify(jwt, process.env.JWT_SECRET, CONFIG);
}
