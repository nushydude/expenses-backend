// @flow
import * as Sentry from '@sentry/node';
import type { GraphQLContext } from '../types';
import { getErrorMessage } from './getErrorMessage';
import { ERROR_CODE } from './types';
import type { GraphQLMutationError } from './types';

export function createUnknownError(
  error: Error,
  ctx: GraphQLContext,
): GraphQLMutationError {
  const errorCode = ERROR_CODE.UNKNOWN_ERROR;

  Sentry.captureException(error);

  return {
    code: errorCode,
    message: getErrorMessage(errorCode, ctx.lang),
  };
}
