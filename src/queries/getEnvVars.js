export default function getEnvVars() {
  const secret = process.env.SECRET;

  return { secret };
}
