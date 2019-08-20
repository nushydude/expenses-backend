import cuid from 'cuid';

export async function getUserByJWT(jwt: string) {
  console.log('jwt:', jwt);

  // TODO:
  // - validate jwt
  // - find user in DB and return

  return {
    id: cuid(),
  };
}
