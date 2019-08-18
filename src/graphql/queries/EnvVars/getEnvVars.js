export function getEnvVars() {
  const secret = process.env.SECRET;

  return { secret };
}

getEnvVars.typeDef = /* GraphQL */ `
  extend type Query {
    getEnvVars(input: GetEnvVarsInput!): EnvVars!
  }

  input GetEnvVarsInput {
    """
    dummy field.
    """
    _: Boolean
  }
`;
