import jwt from 'jsonwebtoken';
import { CONFIG } from './generatePasswordResetSecret';

export function validatePasswordResetSecret(verificationSecret) {
  jwt.verify(verificationSecret, process.env.PASSWORD_RESET_SECRET, CONFIG);
}
