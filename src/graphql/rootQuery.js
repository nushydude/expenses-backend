import * as envVarsQueries from './queries/EnvVars';
import * as expenseQueries from './queries/Expense';
import * as userQueries from './queries/User';

export const rootQuery = {
  // dummy resolver to allow our 'empty' Query type
  _: () => true,
  ...envVarsQueries,
  ...expenseQueries,
  ...userQueries,
};
