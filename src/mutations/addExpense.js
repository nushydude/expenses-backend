const cuid = require('cuid');
const { expenses } = require('../dataStore');

function addExpense(_, { input }) {
  const expense = { ...input, id: cuid() };

  expenses.push(expense);

  return {
    expense,
    error: null,
  };
}

module.exports = addExpense;
