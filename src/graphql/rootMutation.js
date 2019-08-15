// @flow
import * as expenseMutations from './mutations/Expense';

export const rootMutation = {
  // dummy resolver to allow our 'empty' Query type
  _: () => true,
  ...expenseMutations,
};
