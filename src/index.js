// @flow
import argon2 from '@phc/argon2';
import cors from 'micro-cors';
import upash from 'upash';
import { createHandler } from './graphql/createHandler';
import { connect as mongooseConnect } from './mongoose';
import sgMail from '@sendgrid/mail';

// connect to mongoose
mongooseConnect();

// setup emailing service
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// install password hashing algorithm
if (!upash.list().includes('argon2')) {
  upash.install('argon2', argon2);
}

// export the request handler function
export default cors({
  allowMethods: ['POST', 'GET', 'OPTIONS'],
})((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  // eslint-disable-next-line consistent-return
  return createHandler()(req, res);
});
