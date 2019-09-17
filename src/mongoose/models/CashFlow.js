// @flow
import mongoose from 'mongoose';
import { Model } from '../Model';

export class CashFlowModel extends Model {
  async create(cashFlow: any) {
    const { userID, ...fields } = cashFlow;

    const cashFlowDoc = fields;

    if (userID) {
      cashFlowDoc.userID = new mongoose.Types.ObjectId(userID);
    }

    const result = await this.connector.create(cashFlowDoc);

    return result;
  }
}
