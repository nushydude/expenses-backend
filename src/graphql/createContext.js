// @flow
import { getUserByJWT } from '../utils/getUserByJWT';
import { createContextModels } from '../mongoose/createContextModels';
import type { ContextModels } from '../mongoose/createContextModels';
import type { Role } from '../enums/role';
import { verifyJWT } from '../utils/verifyJWT';
import type { Language } from '../enums/language';
import { LANGUAGE } from '../enums/language';
import type { GraphQLContext } from './types';

export const createContext = async ({ req }: any): Promise<GraphQLContext> => {
  const jwt = req.headers.authorization;
  const lang = LANGUAGE[req.headers['x-lang']] || LANGUAGE.EN;

  let user;

  if (jwt) {
    user = verifyJWT(jwt);
  }

  return {
    db: createContextModels(),
    user,
    lang,
  };
};
