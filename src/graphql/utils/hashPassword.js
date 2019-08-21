// @flow
import upash from 'upash';

export async function hashPassword(password: string): Promise<string> {
  const hash = await upash.use('argon2').hash(password);

  return hash;
}
