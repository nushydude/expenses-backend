// @flow
import mongoose from 'mongoose';

export type ExpenseMongooseRecord = {
  _id: mongoose.Schema.Types.ObjectId,
  amount: number,
  date: Date,
  paymentMethod: string,
  type: string,
};
