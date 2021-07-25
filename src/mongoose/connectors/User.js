// @flow
// $FlowFixMe - models not defined in types
import { model, models, Schema } from 'mongoose';
import type { Model } from 'mongoose';
import { ROLE } from '../../enums/role';
import type { UserMongooseRecord } from '../types/User';

export const schema = new Schema<UserMongooseRecord>(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String },
    name: { type: String },
    roles: {
      type: [String],
      default: [ROLE.USER],
      validate: {
        validator(value) {
          const ROLES = Object.values(ROLE);

          return value.every(role => ROLES.includes(role));
        },
        message: '{VALUE} is not a valid role',
      },
    },

    lastLoggedInAt: { type: Date },
    passwordChangedAt: { type: Date },

    verified: { type: Boolean, default: false },

    requiresReauth: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const name = 'User';

export const UserConnector = models[name] || model(name, schema);
