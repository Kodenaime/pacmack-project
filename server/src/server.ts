import './config/env';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './config/db';
import { env } from './config/env';
import { logger } from './config/logger';
import { requestLogger } from './middleware/requestLogger';
import { errorHandler } from './middleware/errorHandler';
import communityRoutes from './routes/communityRoutes';
import contactRoutes from './routes/contactRoutes';

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------
async function main() {
  await connectDB();

  const app = express();

  // -------------------------------------------------------------------------
  // Security & parsing
  // -------------------------------------------------------------------------
  app.use(helmet());

  const allowedOrigins = env.CORS_ORIGINS.split(',').map((s) => s.trim());
  app.use(
    cors({
      origin: allowedOrigins,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'],
      credentials: true,
    })
  );

  app.use(express.json({ limit: '10kb' }));

  // -------------------------------------------------------------------------
  // Request logging
  // -------------------------------------------------------------------------
  if (env.NODE_ENV === 'development') {
    app.use(requestLogger);
  }

  // -------------------------------------------------------------------------
  // Health check
  // -------------------------------------------------------------------------
  app.get('/api/health', (_req, res) => {
    res.json({ success: true, uptime: process.uptime(), timestamp: new Date().toISOString() });
  });

  // -------------------------------------------------------------------------
  // Routes
  // -------------------------------------------------------------------------
  app.use('/api/community', communityRoutes);
  app.use('/api/contact', contactRoutes);

  // -------------------------------------------------------------------------
  // Error handler (must be last)
  // -------------------------------------------------------------------------
  app.use(errorHandler);

  // -------------------------------------------------------------------------
  // Start listening
  // -------------------------------------------------------------------------
  app.listen(env.PORT, () => {
    logger.info({ port: env.PORT, nodeEnv: env.NODE_ENV }, 'Server started');
  });
}

main().catch((err) => {
  logger.error(err, 'Fatal startup error');
  process.exit(1);
});
