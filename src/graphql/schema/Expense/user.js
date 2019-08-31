// @flow
import invariant from 'invariant';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';
import type { UserMongooseRecord } from '../../../mongoose/types/User';

export async function user(
  parent: ExpenseMongooseRecord,
  args: void,
  ctx: any,
): Promise<UserMongooseRecord> {
  const result = await ctx.db.User.findByID(parent._id);

  invariant(result, 'result should be defined');

  return result;
}
