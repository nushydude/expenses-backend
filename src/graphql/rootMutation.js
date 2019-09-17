// @flow
import * as cashFlowMutations from './mutations/CashFlow';
import * as expenseMutations from './mutations/Expense';
import * as userMutations from './mutations/User';

export const rootMutation = {
  // dummy resolver to allow our 'empty' Query type
  _: () => true,
  ...cashFlowMutations,
  ...expenseMutations,
  ...userMutations,
};
