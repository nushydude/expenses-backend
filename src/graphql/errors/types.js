// @flow
export const ERROR_CODE = {
  UNKNOWN_ERROR: 10000,
  DUPLICATE_ACCOUNT: 20000,
  INVALID_EMAIL: 21000,
  PASSWORD_TOO_SHORT: 21100,
};

export type ErrorCode = $Values<typeof ERROR_CODE>;

export type GraphQLMutationError = {
  type: ErrorCode,
  message: string,
};
