import upash from 'upash';

export async function hashPassword(password) {
  const hash = await upash.use('argon2').hash(password);

  return hash;
}
