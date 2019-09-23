// @flow
import type { UserMongooseRecord } from '../../../mongoose/types/User';

export async function sources(
  parent: UserMongooseRecord,
  args: any,
  ctx: any,
): Array<string> {
  const userID = parent._id;

  const expenses = await ctx.db.CashFlow.query({ userID })
    .select('source')
    .lean();

  const results = [...new Set(expenses.map(e => e.source))].sort();

  return results;
}
