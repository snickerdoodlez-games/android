/**
 * Express routes for Play Integrity verification.
 *
 * Endpoints:
 *   POST /api/integrity/nonce         — Generate a new nonce for the client
 *   POST /api/integrity/verify        — Verify an integrity token from the client
 *   GET  /api/integrity/health        — Health check endpoint
 */

import { Router, type Request, type Response } from 'express';

import { verifyIntegrity } from './integrityService.js';
import { generateNonce, validateAndConsumeNonce } from './nonceStore.js';

const router = Router();

/**
 * POST /api/integrity/nonce
 *
 * Generates a new cryptographically unique nonce for the client.
 * The client must include this nonce when requesting an integrity token from Google,
 * and pass both the token and nonce back to /api/integrity/verify.
 *
 * Response: { nonce: string, expiresAt: string }
 */
router.post('/nonce', (_req: Request, res: Response) => {
  const nonceResult = generateNonce();

  res.json({
    success: true,
    data: nonceResult,
  });
});

/**
 * POST /api/integrity/verify
 *
 * Verifies a Play Integrity token from the client.
 *
 * Request body: { integrityToken: string, nonce: string }
 * Response: { success: boolean, isAllowed: boolean, reason: string, details?: object }
 *
 * The nonce is consumed on successful validation (single-use).
 * On failure, the nonce is invalidated regardless to prevent brute-force attempts.
 */
router.post('/verify', async (req: Request, res: Response) => {
  const { integrityToken, nonce } = req.body as {
    integrityToken?: string;
    nonce?: string;
  };

  // ---- Validate request body ----
  if (!integrityToken || typeof integrityToken !== 'string') {
    res.status(400).json({
      success: false,
      error: 'Missing or invalid integrityToken in request body',
    });
    return;
  }

  if (!nonce || typeof nonce !== 'string') {
    res.status(400).json({
      success: false,
      error: 'Missing or invalid nonce in request body',
    });
    return;
  }

  // ---- Validate nonce (replay protection) ----
  if (!validateAndConsumeNonce(nonce)) {
    res.status(401).json({
      success: false,
      isAllowed: false,
      reason:
        'Invalid, expired, or already-used nonce. Request a new nonce and try again.',
    });
    return;
  }

  // ---- Verify integrity (uses Application Default Credentials) ----
  const result = await verifyIntegrity(integrityToken, nonce);

  // ---- Log the result for monitoring ----
  const logPrefix = result.isAllowed ? '[Integrity] PASS' : '[Integrity] DENY';
  console.log(
    `${logPrefix} — ${result.reason}` +
      (result.details
        ? ` | App: ${result.details.appVerdict} | Device: [${result.details.deviceVerdicts.join(', ')}]` +
          (result.details.environmentRisks.length > 0
            ? ` | Risks: [${result.details.environmentRisks.join(', ')}]`
            : '')
        : ''),
  );

  if (!result.isAllowed) {
    res.status(403).json({
      success: true,
      isAllowed: false,
      reason: result.reason,
      // Only include details in non-production for debugging
      details:
        process.env.NODE_ENV !== 'production'
          ? result.details
          : undefined,
    });
    return;
  }

  // All checks passed — grant access
  res.json({
    success: true,
    isAllowed: true,
    reason: result.reason,
  });
});

/**
 * GET /api/integrity/health
 *
 * Simple health check to verify the server is running.
 * Checks that Application Default Credentials (ADC) are available.
 */
router.get('/health', async (_req: Request, res: Response) => {
  let adcAvailable = false;
  try {
    // Check if ADC is available by trying to get a client
    const { GoogleAuth } = await import('google-auth-library');
    const auth = new GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/playintegrity'],
    });
    await auth.getClient();
    adcAvailable = true;
  } catch {
    // ADC not available
  }

  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    adcAvailable,
  });
});

export default router;