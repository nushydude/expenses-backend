// @flow
import type { ErrorCode } from './types';
import { DICTIONARY as enDict } from './dictionaries/en';
import type { Language } from '../../enums/language';
import { LANGUAGE } from '../../enums/language';

export function getErrorMessage(
  errorCode: ErrorCode,
  language: Language = LANGUAGE.EN,
) {
  switch (language) {
    case LANGUAGE.EN:
      return enDict[errorCode];

    default:
      return enDict[errorCode];
  }
}
