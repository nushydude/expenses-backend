import { ExpenseConnector } from './connectors/Expense';
import { ExpenseModel } from './models/Expense';

export const createContextModels = () => {
  return {
    Expense: new ExpenseModel({ connector: ExpenseConnector }),
  } 
}