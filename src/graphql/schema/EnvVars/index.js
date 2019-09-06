// @flow
export const EnvVars = {};

export const typeDef = /* GraphQL */ `
  type EnvVars {
    SECRET: String
    MONGODB_CONNECTION_STRING: String
    JWT_SECRET: String
    ACCOUNT_VERIFICATION_SECRET: String
    PASSWORD_RESET_SECRET: String
    SENDGRID_API_KEY: String
    PASSWORD_RESET_URL: String
    ACCOUNT_VERIFICATION_URL: String
    JWT_ISSUER: String
    NODE_ENV: String
  }
`;
