// @flow
import mongoose from 'mongoose';
import type { Role } from '../../enums/role';

export type UserMongooseRecord = {
  _id: mongoose.Schema.Types.ObjectId,
  email: string,
  passwordHash: string,
  name: string,
  roles: Array<Role>,
  lastLoggedInAt?: Date,
  passwordChangedAt?: Date,
  verified: boolean,
  requiresReauth?: Boolean,
};
