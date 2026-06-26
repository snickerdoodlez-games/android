/**
 * Word Pairing: Category Match — Backend Server
 *
 * Express server providing Play Integrity API verification endpoints.
 * All verification is done server-side to prevent client-side tampering.
 */

import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import integrityRoutes from './routes.js';

const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);

// ---- Middleware ----
app.use(cors());
app.use(express.json());

// ---- Request logging middleware ----
app.use((req, _res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// ---- Routes ----
app.use('/api/integrity', integrityRoutes);

// ---- Root health check ----
app.get('/', (_req, res) => {
  res.json({
    service: 'Word Pairing Backend',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      nonce: 'POST /api/integrity/nonce',
      verify: 'POST /api/integrity/verify',
      health: 'GET /api/integrity/health',
    },
  });
});

// ---- Global error handler ----
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(`[Error] Unhandled error: ${err.message}`);
    console.error(err.stack);

    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  },
);

// ---- Start server ----
app.listen(PORT, () => {
  console.log('');
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║  Word Pairing: Category Match — Backend     ║');
  console.log('╠══════════════════════════════════════════════╣');
  console.log(`║  Server running on http://localhost:${PORT}    ║`);
  console.log('║                                              ║');
  console.log('║  Endpoints:                                  ║');
  console.log(`║  POST /api/integrity/nonce                   ║`);
  console.log(`║  POST /api/integrity/verify                  ║`);
  console.log(`║  GET  /api/integrity/health                  ║`);
  console.log('╚══════════════════════════════════════════════╝');
  console.log('');

  // Validate Application Default Credentials on startup
  async function checkAdc() {
    try {
      const { GoogleAuth } = await import('google-auth-library');
      const auth = new GoogleAuth({
        scopes: ['https://www.googleapis.com/auth/playintegrity'],
      });
      await auth.getClient();
      console.log('✓  Application Default Credentials (ADC) available');
    } catch {
      console.warn('⚠  WARNING: ADC not available.');
      console.warn('   Run: gcloud auth application-default login --impersonate-service-account=SA_EMAIL');
      console.warn('   Or set GOOGLE_APPLICATION_CREDENTIALS env var.');
    }
  }
  checkAdc();
  console.log('');
});

export default app;