// @flow
export const CASH_FLOW_TYPE = Object.freeze({
  EXPENSE: 'EXPENSE',
  INCOME: 'INCOME',
});

export type CashFlowType = $Values<typeof CASH_FLOW_TYPE>;
