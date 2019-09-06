// @flow
export const ROLE = Object.freeze({
  ADMIN: 'ADMIN',
  USER: 'USER',
});

export type Role = $Values<typeof ROLE>;
