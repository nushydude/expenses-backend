// @flow
import mongoose from 'mongoose';
import { handleConnectionError } from './handleConnectionError';
import { env } from '../configs/env';
import { logger } from '../utils/logger';

export async function connect(): Promise<void> {
  // if we already have a connection, skip
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    mongoose.connect(env.mongoDBConnectionString, {
      useNewUrlParser: true,
      readPreference: 'nearest',
    });

    mongoose.connection.on('error', handleConnectionError);

    mongoose.set('debug', env.isDev);
  } catch (error) {
    logger.error('Mongoose connect error:', error);

    handleConnectionError(error);
  }
}
