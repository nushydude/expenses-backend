export function getEnvVars() {
  const secret = process.env.SECRET;
  const date = Date.now();

  return { secret: `${date} - ${secret ? secret : 'no secret found'}` };
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
