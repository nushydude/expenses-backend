// @flow
import argon2 from '@phc/argon2';
import cors from 'micro-cors';
import { createError } from 'micro';
import upash from 'upash';
import { createHandler } from './graphql/createHandler';
import { connect as mongooseConnect } from './mongoose/connect';
import sgMail from '@sendgrid/mail';
import * as Sentry from '@sentry/node';
import { verifyJWT } from './utils/verifiyJWT';

Sentry.init({ dsn: process.env.SENTRY_DSN });

// connect to mongoose
mongooseConnect();

// setup emailing service
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// install password hashing algorithm
if (!upash.list().includes('argon2')) {
  upash.install('argon2', argon2);
}

myUndefinedFunction();

// export the request handler function
export default cors({
  allowMethods: ['POST', 'GET', 'OPTIONS'],
  allowHeaders: [
    'X-Requested-With',
    'Access-Control-Allow-Origin',
    'X-HTTP-Method-Override',
    'Content-Type',
    'Authorization',
    'Accept',
    'apollographql-client-version',
  ],
})((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  const jwt = req.headers.authorization;
  if (jwt) {
    try {
      verifyJWT();
    } catch (error) {
      throw createError(401, 'Invalid JWT');
    }
  }

  // eslint-disable-next-line consistent-return
  return createHandler()(req, res);
});
