// @flow
import winston from 'winston';

export const logger = winston.createLogger<any>({
  transports: [new winston.transports.Console()],
});
