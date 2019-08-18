
import cors from 'micro-cors';
import { createHandler } from './src/graphql/createHandler';
import { connect } from './src/mongoose';

connect();

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
