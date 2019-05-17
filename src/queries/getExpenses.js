const { expenses } = require('../dataStore');

function getExpenses() {
  return expenses;
}

module.exports = getExpenses;
