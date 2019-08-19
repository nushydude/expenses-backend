// @flow
import argon2 from '@phc/argon2';
import cors from 'micro-cors';
import upash from 'upash';
import { createHandler } from './src/graphql/createHandler';
import { connect as mongooseConnect } from './src/mongoose';
import sgMail from '@sendgrid/mail';

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

  // setup emailing service
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // connect to mongoose
  mongooseConnect();

  // eslint-disable-next-line consistent-return
  return createHandler()(req, res);
});
