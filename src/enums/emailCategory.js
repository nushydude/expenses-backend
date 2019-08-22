// @flow
export const EMAIL_CATEGORY = Object.freeze({
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_ACCOUNT: 'VERIFY_ACCOUNT',
});

export type EmailCategory = $Values<typeof EMAIL_CATEGORY>;
