// @flow
import mongoose from 'mongoose';
import { handleConnectionError } from './handleConnectionError';
import { logger } from '../utils/logger';

export async function connect(): Promise<void> {
  // if we already have a connection, skip
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      readPreference: 'nearest',
    });

    mongoose.connection.on('error', handleConnectionError);

    mongoose.set('debug', process.env.NODE_ENV === 'development');
  } catch (error) {
    logger.error('Mongoose connect error:', error);

    handleConnectionError(error);
  }
}
