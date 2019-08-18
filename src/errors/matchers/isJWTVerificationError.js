const JWT_ERRORS_REGEX = new RegExp(
  /invalid signature|invalid token|jwt malformed|jwt expired/,
);

export function isJWTVerificationError(error) {
  return JWT_ERRORS_REGEX.test(error.message);
}
