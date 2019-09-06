// @flow
import { model, models, Schema } from 'mongoose';
import { ROLE } from '../../enums/role';

export const schema = new Schema(
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
    verificationSecret: { type: String },
    resetPasswordSecret: { type: String },

    types: { type: [String], default: [] },
    paymentMethods: { type: [String], default: [] },
  },
  {
    timestamps: true,
  },
);

const name = 'User';

export const UserConnector = models[name] || model(name, schema);
