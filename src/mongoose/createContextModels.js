// @flow
import { CashFlowConnector } from './connectors/CashFlow';
import { CashFlowModel } from './models/CashFlow';
import { ExpenseConnector } from './connectors/Expense';
import { ExpenseModel } from './models/Expense';
import { UserConnector } from './connectors/User';
import { UserModel } from './models/User';

export function createContextModels() {
  return {
    CashFlow: new CashFlowModel({ connector: CashFlowConnector }),
    Expense: new ExpenseModel({ connector: ExpenseConnector }),
    User: new UserModel({ connector: UserConnector }),
  };
}
