// @flow
import { Model } from '../Model';
import { generateAccountVerificationSecret } from '../../graphql/utils/generateAccountVerificationSecret';

export class UserModel extends Model {
  async create(userDoc) {
    let user = await this.connector.create(userDoc);

    user = await this.findByIDAndUpdate(user._id, {
      $set: {
        verificationSecret: generateAccountVerificationSecret(user),
      },
    });

    return user;
  }
}
