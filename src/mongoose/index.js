import mongoose from 'mongoose';
import { handleConnectionError } from './handleConnectionError';

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
    });

    mongoose.connection.on('error', handleConnectionError);

    mongoose.set('debug', process.env.NODE_ENV === 'development');
  } catch (error) {
    handleConnectionError(error);
  }
};
