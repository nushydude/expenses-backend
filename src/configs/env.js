// @flow
import invariant from 'invariant';

const accountVerificationSecret = process.env.ACCOUNT_VERIFICATION_SECRET;
const accountVerificationURL = process.env.ACCOUNT_VERIFICATION_URL;
const jwtIssuer = process.env.JWT_ISSUER;
const jwtSecret = process.env.JWT_SECRET;
const mongoDBConnectionString = process.env.MONGODB_CONNECTION_STRING;
const mongoDBConnectionStringTest = process.env.MONGODB_CONNECTION_STRING_TEST;
const nodeEnv = process.env.NODE_ENV;
const passwordResetSecret = process.env.PASSWORD_RESET_SECRET;
const passwordResetURL = process.env.PASSWORD_RESET_URL;
const sendgridApiKey = process.env.SENDGRID_API_KEY;
const sentryDSN = process.env.SENTRY_DSN;

invariant(
  accountVerificationURL,
  'ACCOUNT_VERIFICATION_URL env var should be defined',
);
invariant(passwordResetURL, 'PASSWORD_RESET_URL env var should be defined');
invariant(jwtIssuer, 'JWT_ISSUER env var should be defined');
invariant(
  accountVerificationSecret,
  'ACCOUNT_VERIFICATION_SECRET env var should be defined',
);
invariant(
  passwordResetSecret,
  'PASSWORD_RESET_SECRET env var should be defined',
);
invariant(sentryDSN, 'SENTRY_DSN env var should be defined');
invariant(sendgridApiKey, 'SENDGRID_API_KEY env var should be defined');
invariant(
  mongoDBConnectionString,
  'MONGODB_CONNECTION_STRING env var should be defined',
);
invariant(
  mongoDBConnectionStringTest,
  'MONGODB_CONNECTION_STRING_TEST env var should be defined',
);
invariant(nodeEnv, 'NODE_ENV env var should be defined');
invariant(jwtSecret, 'JWT_SECRET env var should be defined');

export const env = {
  accountVerificationSecret,
  accountVerificationURL,
  isDev: Boolean(nodeEnv),
  jwtIssuer,
  jwtSecret,
  mongoDBConnectionString,
  nodeEnv,
  passwordResetSecret,
  passwordResetURL,
  sendgridApiKey,
  sentryDSN,
};
