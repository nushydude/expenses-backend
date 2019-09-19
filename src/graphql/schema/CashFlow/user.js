// @flow
import invariant from 'invariant';
import type { CashFlowMongooseRecord } from '../../../mongoose/types/CashFlow';
import type { UserMongooseRecord } from '../../../mongoose/types/User';

export async function user(
  parent: CashFlowMongooseRecord,
  args: void,
  ctx: any,
): Promise<UserMongooseRecord> {
  const result = await ctx.db.User.findByID(parent.userID);

  invariant(result, 'result should be defined');

  return result;
}
