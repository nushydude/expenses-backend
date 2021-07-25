// @flow
import { getUserByJWT } from '../utils/getUserByJWT';
import { createContextModels } from '../mongoose/createContextModels';
import type { Role } from '../enums/role';
import { verifyJWT } from '../utils/verifyJWT';

export type GraphQLContext = {
  db: any,
  user: ?{
    id: string,
    roles: Array<Role>,
  },
};

export const createContext = async ({ req }: any): Promise<GraphQLContext> => {
  const jwt = req.headers.authorization;

  let user;

  if (jwt) {
    user = verifyJWT(jwt);
  }

  return {
    db: createContextModels(),
    user,
  };
};
