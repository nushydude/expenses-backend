import { getUserByJWT } from './utils';
import { createContextModels } from '../mongoose/createContextModels';

export const createContext = async ({ req }) => {
  const jwt = req.headers.authorization;

  let user;

  if (jwt) {
    user = await getUserByJWT(req.headers.authorization);
  }

  return {
    db: createContextModels(),
    user,
  };
};
