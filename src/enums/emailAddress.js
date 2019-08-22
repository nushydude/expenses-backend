// @flow
export const EMAIL_ADDRESS = Object.freeze({
  NO_REPLY: 'no-reply@expensesApp.com',
});

export type EmailAddress = $Values<typeof EMAIL_ADDRESS>;
