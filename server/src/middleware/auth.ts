import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../utils/AppError';
import { env } from '../config/env';

export function adminAuth(req: Request, _res: Response, next: NextFunction): void {
  const apiKey = req.header('x-api-key');

  if (!apiKey || !env.ADMIN_API_KEY || apiKey !== env.ADMIN_API_KEY) {
    throw new UnauthorizedError('Invalid or missing API key');
  }

  next();
}
