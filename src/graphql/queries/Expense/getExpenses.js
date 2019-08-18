
export async function getExpenses(_, args, ctx) {
  const expenses = await ctx.db.Expense.find({});

  return expenses;
}

getExpenses.typeDef = /* GraphQL */ `
  extend type Query {
    getExpenses(input: GetExpensesInput!): [Expense]!
  }

  input GetExpensesInput {
    """
    dummy field.
    """
    _: Boolean
  }
`;
