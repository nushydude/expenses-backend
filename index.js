import argon2 from '@phc/argon2';
import cors from 'micro-cors';
import upash from 'upash';
import { createHandler } from './src/graphql/createHandler';
import { connect } from './src/mongoose';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

connect();

const installed = upash.list();

if (!installed.includes('argon2')) {
  upash.install('argon2', argon2);
}

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
