import dotenv from 'dotenv';
dotenv.config();

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function optional(name: string, fallback: string): string {
  return process.env[name] || fallback;
}

function optionalInt(name: string, fallback: number): number {
  const raw = process.env[name];
  return raw ? parseInt(raw, 10) : fallback;
}

function optionalBool(name: string, fallback: boolean): boolean {
  const raw = process.env[name];
  if (!raw) return fallback;
  return raw === '1' || raw.toLowerCase() === 'true';
}

export const env = {
  NODE_ENV: optional('NODE_ENV', 'development'),
  PORT: optionalInt('PORT', 5000),

  MONGODB_URI: required('MONGODB_URI'),

  JWT_SECRET: required('JWT_SECRET'),
  JWT_EXPIRES_IN: optional('JWT_EXPIRES_IN', '7d'),

  RESEND_API_KEY: required('RESEND_API_KEY'),

  ADMIN_EMAIL: required('ADMIN_EMAIL'),
  ADMIN_API_KEY: optional('ADMIN_API_KEY', ''),

  CORS_ORIGINS: optional('CORS_ORIGINS', 'https://pacmack.com,https://www.pacmack.com,http://localhost:5173,http://localhost:5174'),

  RATE_LIMIT_WINDOW_MS: optionalInt('RATE_LIMIT_WINDOW_MS', 15 * 60 * 1000),
  RATE_LIMIT_MAX: optionalInt('RATE_LIMIT_MAX', 100),

  LOG_LEVEL: optional('LOG_LEVEL', 'info'),
} as const;
