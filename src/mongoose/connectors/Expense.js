// @flow
import { model, models, Schema } from 'mongoose';

export const schema = new Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  paymentMethod: { type: String, required: true },
  type: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, required: true, index: true },
});

const name = 'Expense';

export const ExpenseConnector = models[name] || model(name, schema);
