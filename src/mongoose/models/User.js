// @flow
import { Model } from '../Model';
import { generateAccountVerificationSecret } from '../../graphql/utils/generateAccountVerificationSecret';
import type { UserMongooseRecord } from '../types/User';

export class UserModel extends Model<UserMongooseRecord> {
  async create(userDoc: UserMongooseRecord) {
    let user = await this.connector.create(userDoc);

    user = await this.findByIDAndUpdate(user._id, {
      $set: {
        verificationSecret: generateAccountVerificationSecret(user),
      },
    });

    return user;
  }
}
