// @flow
import cors from 'micro-cors';
import { createHandler } from './src/graphql/createHandler';

export default cors({
  allowMethods: ['POST', 'GET', 'OPTIONS'],
})((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  return createHandler()(req, res);
});
