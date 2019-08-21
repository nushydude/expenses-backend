// @flow
export const ROLE = Object.freeze({
  ADMIN: 0,
  USER: 1,
});

export type Role = $Values<typeof ROLE>;
