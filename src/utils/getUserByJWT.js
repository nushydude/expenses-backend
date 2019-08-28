// @flow
import jsonwebtoken from 'jsonwebtoken';
import type { Role } from '../enums/role';

type User = {
  id: string,
  roles: Array<Role>,
};

export function getUserByJWT(jwt: string): User {
  const { userID, roles } = jsonwebtoken.decode(jwt);

  return { id: userID, roles };
}
