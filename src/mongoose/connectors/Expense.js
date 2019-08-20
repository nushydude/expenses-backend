import { model, models, Schema } from 'mongoose';

export const schema = new Schema({
  amount: { type: Number },
  date: { type: Date },
  paymentMethod: { type: String },
  type: { type: String },
});

const name = 'Expense';

export const ExpenseConnector = models[name] || model(name, schema);
