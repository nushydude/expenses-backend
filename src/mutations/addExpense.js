import cuid from 'cuid';
import { expenses } from '../dataStore';

export function addExpense(_, { input }) {
  const expense = { ...input, id: cuid() };

  expenses.push(expense);

  return {
    expense,
    error: null,
  };
}
