// @flow
import type { GraphQLContext } from '../types';
import { getErrorMessage } from './getErrorMessage';
import { ERROR_CODE } from './types';
import type { GraphQLMutationError } from './types';

export function createInvalidEmailError(
  ctx: GraphQLContext,
): GraphQLMutationError {
  const errorCode = ERROR_CODE.INVALID_EMAIL;

  return {
    code: errorCode,
    message: getErrorMessage(errorCode, ctx.lang),
  };
}
