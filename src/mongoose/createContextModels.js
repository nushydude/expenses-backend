// @flow
import { CashFlowConnector } from './connectors/CashFlow';
import { CashFlowModel } from './models/CashFlow';
import { ExpenseConnector } from './connectors/Expense';
import { ExpenseModel } from './models/Expense';
import { UserConnector } from './connectors/User';
import { UserModel } from './models/User';

export type ContextModels = {
  CashFlow: CashFlowModel,
  Expense: ExpenseModel,
  User: UserModel,
};

export function createContextModels(): ContextModels {
  return {
    CashFlow: new CashFlowModel({ connector: CashFlowConnector }),
    Expense: new ExpenseModel({ connector: ExpenseConnector }),
    User: new UserModel({ connector: UserConnector }),
  };
}
