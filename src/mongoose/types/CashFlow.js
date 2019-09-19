// @flow
import mongoose from 'mongoose';
import type { CashFlowType } from '../../enums/cashFlowType';

export type CashFlowMongooseRecord = {
  _id: mongoose.Schema.Types.ObjectId,
  amount: number,
  category: string,
  date: Date,
  notes?: string,
  source: string,
  type: CashFlowType,
  userID: mongoose.Schema.Types.ObjectId,
};
