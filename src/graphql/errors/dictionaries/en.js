// @flow
import { ERROR_CODE } from '../types';

export const DICTIONARY = {
  [ERROR_CODE.DUPLICATE_ACCOUNT]:
    'An account with the same email exists. Please log in instead.',
  [ERROR_CODE.PASSWORD_TOO_SHORT]:
    'The provided password needs to be longer than 6 characters',
  [ERROR_CODE.INVALID_EMAIL]: 'The provided email is not a valid email',
  [ERROR_CODE.UNKNOWN_ERROR]: 'An unknown error occurred.',
};
