// @flow
import type { ContextModels } from '../mongoose/createContextModels';
import type { Language } from '../enums/language';
import type { Role } from '../enums/role';
import { CashFlow } from './schema/CashFlow';
import { EnvVars } from './schema/EnvVars';
import { User } from './schema/User';

export const types = {
  CashFlow,
  EnvVars,
  User,
};

export type GraphQLContext = {
  db: ContextModels,
  lang: Language,
  user: ?{
    id: string,
    roles: Array<Role>,
  },
};
