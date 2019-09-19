// @flow
import { model, models, Schema } from 'mongoose';
import { CASH_FLOW_TYPE } from '../../enums/cashFlowType';
import type { CashFlowMongooseRecord } from '../types/CashFlow';

export const schema = new Schema<CashFlowMongooseRecord>({
  amount: { type: Number, required: true },
  date: { type: Date, required: true, index: true },
  notes: { type: String },
  source: { type: String, required: true, index: true },
  category: { type: String, required: true, index: true },
  userID: { type: Schema.Types.ObjectId, required: true, index: true },
  type: {
    type: String,
    enum: Object.values(CASH_FLOW_TYPE),
    default: CASH_FLOW_TYPE.EXPENSE,
  },
});

const name = 'CashFlow';

export const CashFlowConnector = models[name] || model(name, schema);
