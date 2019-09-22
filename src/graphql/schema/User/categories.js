// @flow
import type { UserMongooseRecord } from '../../../mongoose/types/User';

export async function categories(
  parent: UserMongooseRecord,
  args: any,
  ctx: any,
): Array<string> {
  const userID = parent._id;

  const expenses = await ctx.db.CashFlow.query({ userID })
    .select('category')
    .lean();

  const results = [...new Set(expenses.map(e => e.category))];

  return results;
}
