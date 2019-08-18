import { Model } from '../Model';

export class ExpenseModel extends Model {
  async create(expenseDoc) {
    const result = await this.connector.create(expenseDoc);

    return result;
  }
}
