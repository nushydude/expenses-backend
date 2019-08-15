// @flow
import cuid from 'cuid';

export async function getUserByJWT(jwt) {
  // TODO:
  // - validate jwt
  // - find user in DB and return

  return {
    id: cuid(),
  };
}
