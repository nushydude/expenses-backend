// @flow
import { Model } from '../Model';
import { generateAccountVerificationSecret } from '../../graphql/utils/generateAccountVerificationSecret';
import type { UserMongooseRecord } from '../types/User';

export class UserModel extends Model<UserMongooseRecord> {
  async create(userDoc: $Shape<UserMongooseRecord>) {
    const user = await this.connector.create(userDoc);

    return user;
  }
}
