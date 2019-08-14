import { getUserByJWT } from './utils';

export const createContext = async ({ req }) => {
  const jwt = req.headers.authorization;

  let user;

  if (jwt) {
    user = await getUserByJWT(req.headers.authorization);
  }

  return { user };
}