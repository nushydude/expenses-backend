// @flow
import sift from 'sift';

// generates our batch loader function for plugging into a DataLoader, running
// the queries against the provided mongoose model
export function createMongooseBatchLoader(connector) {
  async function batchLoadQueries(queries) {
    // use the $or operator to combine all of our queries into a single DB op
    const query = connector.find({ $or: queries });

    const queryResults = await query;

    // use sift.js to filter our results in memory using the exact same queries to
    // emulate a response for each query that was passed.
    const results = queries.map(q => queryResults.filter(sift(q)));

    return results;
  }

  return batchLoadQueries;
}
