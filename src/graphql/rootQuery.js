import * as envVarsQueries from './queries/EnvVars';
import * as expenseQueries from './queries/Expense';

export const rootQuery = {
  // dummy resolver to allow our 'empty' Query type
  _: () => true,
  ...envVarsQueries,
  ...expenseQueries,
};
