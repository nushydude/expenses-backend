function getEnvVars() {
  const secret = process.env.SECRET;

  return { secret };
}

module.exports = getEnvVars;
