// @flow
import mongoose from 'mongoose';
import { Model } from '../Model';

export class ExpenseModel extends Model {
  async create(expense: any) {
    const { userID, ...fields } = expense;

    const expenseDoc = fields;

    if (userID) {
      expenseDoc.userID = new mongoose.Types.ObjectId(userID);
    }

    const result = await this.connector.create(expenseDoc);

    return result;
  }
}
