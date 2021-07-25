// @flow
import type { GraphQLContext } from '../types';
import { getErrorMessage } from './getErrorMessage';
import { ERROR_CODE } from './types';
import type { GraphQLMutationError } from './types';

export function createPasswordTooShortError(
  ctx: GraphQLContext,
): GraphQLMutationError {
  const errorCode = ERROR_CODE.PASSWORD_TOO_SHORT;

  return {
    code: errorCode,
    message: getErrorMessage(errorCode, ctx.lang),
  };
}
