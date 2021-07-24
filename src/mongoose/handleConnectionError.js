// @flow
import * as Sentry from '@sentry/node';

export function handleConnectionError(error: Error): void {
  Sentry.captureException(error);
}
