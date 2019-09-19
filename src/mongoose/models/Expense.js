// @flow
import mongoose from 'mongoose';
import { Model } from '../Model';
import type { ExpenseMongooseRecord } from '../types/Expense';

export class ExpenseModel extends Model<ExpenseMongooseRecord> {
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
