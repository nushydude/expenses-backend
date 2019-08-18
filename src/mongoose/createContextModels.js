import { ExpenseConnector } from './connectors/Expense';
import { ExpenseModel } from './models/Expense';
import { UserConnector } from './connectors/User';
import { UserModel } from './models/User';

export const createContextModels = () => ({
  Expense: new ExpenseModel({ connector: ExpenseConnector }),
  User: new UserModel({ connector: UserConnector }),
});
