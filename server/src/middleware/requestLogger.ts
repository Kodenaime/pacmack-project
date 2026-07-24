import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';
import { logger } from '../config/logger';

export function requestLogger(req: Request, _res: Response, next: NextFunction): void {
  logger.info({ req }, `${req.method} ${req.path}`);
  next();
}
