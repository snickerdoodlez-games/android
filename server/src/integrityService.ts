/**
 * Play Integrity Verification Service
 * 
 * Decodes and evaluates Google Play Integrity tokens server-side.
 * Follows the fail-closed security principle — any error or ambiguity results in denial.
 *
 * Authentication uses Application Default Credentials (ADC) — no JSON key files needed.
 * Set up ADC with: gcloud auth application-default login --impersonate-service-account=SA_EMAIL
 */

import { GoogleAuth } from 'google-auth-library';

import type {
  DecodeIntegrityResponse,
  IntegrityVerdict,
  IntegrityEvaluation,
  IntegrityDetails,
} from './types.js';

/** The Google Play Integrity API base URL */
const PLAY_INTEGRITY_API = 'https://playintegrity.googleapis.com/v1';

/** Your app's package name — must match the one registered in Google Play Console */
const PACKAGE_NAME = 'com.snickerdoodlez.wordpairing';

/**
 * Decodes a raw integrity token by calling Google's Play Integrity API.
 * Uses Application Default Credentials (ADC) — no JSON key file required.
 * Falls back to GOOGLE_APPLICATION_CREDENTIALS env var if set.
 *
 * @param integrityToken - The raw token received from the Android client
 * @returns Parsed IntegrityVerdict from Google
 */
async function decodeIntegrityToken(
  integrityToken: string,
): Promise<IntegrityVerdict> {
  // ADC: automatically discovers credentials from:
  //   1. GOOGLE_APPLICATION_CREDENTIALS env var
  //   2. gcloud auth application-default login session
  //   3. Workload Identity Federation (GKE, Cloud Run, etc.)
  const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/playintegrity'],
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();

  const url = `${PLAY_INTEGRITY_API}/${PACKAGE_NAME}:decodeIntegrityToken`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      integrityToken,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Play Integrity API error (${response.status}): ${errorText}`,
    );
  }

  const data: DecodeIntegrityResponse = await response.json();
  return data.tokenPayloadExternal;
}

/**
 * Evaluates an integrity verdict against the security policy.
 * Implements the security hierarchy: App Integrity → Device Integrity → Environment Risks.
 *
 * @param verdict - The decoded integrity verdict from Google
 * @param expectedNonce - The nonce that was issued to the client (must match)
 * @returns IntegrityEvaluation with pass/fail decision and reason
 */
export function evaluateIntegrity(
  verdict: IntegrityVerdict,
  expectedNonce?: string,
): IntegrityEvaluation {
  const details: IntegrityDetails = {
    appVerdict: verdict.appIntegrity?.appRecognitionVerdict ?? 'UNEVALUATED',
    deviceVerdicts: verdict.deviceIntegrity?.deviceRecognitionVerdict ?? [],
    environmentRisks: [],
    deviceIsSecure: false,
    appIsRecognized: false,
  };

  // ---- Step 0: Nonce Validation (Replay Protection) ----
  if (expectedNonce && verdict.requestDetails?.nonce) {
    if (verdict.requestDetails.nonce !== expectedNonce) {
      return {
        isAllowed: false,
        reason: 'Nonce mismatch — possible replay attack',
        details,
      };
    }
  } else if (expectedNonce && !verdict.requestDetails?.nonce) {
    // Nonce was expected but not present in response
    return {
      isAllowed: false,
      reason: 'Nonce missing in integrity response — possible replay attack',
      details,
    };
  }

  // ---- Step 1: Verify App Integrity ----
  if (verdict.appIntegrity?.appRecognitionVerdict !== 'PLAY_RECOGNIZED') {
    return {
      isAllowed: false,
      reason: `App not recognized or sideloaded (verdict: ${details.appVerdict})`,
      details,
    };
  }
  details.appIsRecognized = true;

  // ---- Step 2: Verify Device Integrity ----
  const deviceVerdicts = verdict.deviceIntegrity?.deviceRecognitionVerdict ?? [];

  // Must pass at least BASIC + DEVICE integrity
  const hasBasic = deviceVerdicts.includes('MEETS_BASIC_INTEGRITY');
  const hasDevice = deviceVerdicts.includes('MEETS_DEVICE_INTEGRITY');

  if (!hasBasic || !hasDevice) {
    return {
      isAllowed: false,
      reason: `Device environment is insecure or tampered. Verdicts: [${deviceVerdicts.join(', ')}]`,
      details,
    };
  }
  details.deviceIsSecure = true;

  // ---- Step 3: Assess Environment Risks ----
  const riskVerdict = verdict.environmentDetails?.appAccessRiskVerdict;

  if (riskVerdict?.appsDetected && riskVerdict.appsDetected.length > 0) {
    details.environmentRisks = [...riskVerdict.appsDetected];

    // Check for screen capturing tools (Frida, scrcpy, etc.)
    const hasCapturingApps = riskVerdict.appsDetected.some(
      (app) => app === 'UNKNOWN_CAPTURING' || app === 'KNOWN_CAPTURING',
    );

    if (hasCapturingApps) {
      return {
        isAllowed: false,
        reason: 'Risky environment: Screen capturing or instrumentation tools detected',
        details,
      };
    }

    // For non-capturing risky apps, we could allow with reduced trust,
    // but following fail-closed principle, deny by default
    return {
      isAllowed: false,
      reason: `Risky environment: Suspicious apps detected [${riskVerdict.appsDetected.join(', ')}]`,
      details,
    };
  }

  // ---- Step 4: Check for virtual display ----
  if (riskVerdict?.virtualDisplayDetected) {
    return {
      isAllowed: false,
      reason: 'Virtual display or screen mirroring detected',
      details,
    };
  }

  // ---- Step 5: Check Play Protect ----
  const playProtect = verdict.environmentDetails?.playProtectVerdict;
  if (playProtect === 'PLAY_PROTECT_DISABLED') {
    return {
      isAllowed: false,
      reason: 'Play Protect is disabled on this device',
      details,
    };
  }

  // All checks passed
  return {
    isAllowed: true,
    reason: 'Integrity verified successfully',
    details,
  };
}

/**
 * Full verification pipeline:
 * 1. Authenticates with Google using Application Default Credentials
 * 2. Decodes the integrity token via Play Integrity API
 * 3. Evaluates the verdict against security policy
 *
 * @param integrityToken - The raw integrity token from the Android client
 * @param expectedNonce - The nonce that was issued to this client (for replay protection)
 * @returns IntegrityEvaluation with the final decision
 */
export async function verifyIntegrity(
  integrityToken: string,
  expectedNonce: string | undefined,
): Promise<IntegrityEvaluation> {
  try {
    const verdict = await decodeIntegrityToken(integrityToken);
    return evaluateIntegrity(verdict, expectedNonce);
  } catch (error) {
    // Fail-closed: any error during verification results in denial
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error during verification';

    return {
      isAllowed: false,
      reason: `Verification failed: ${errorMessage}`,
      details: {
        appVerdict: 'UNEVALUATED',
        deviceVerdicts: [],
        environmentRisks: [],
        deviceIsSecure: false,
        appIsRecognized: false,
      },
    };
  }
}
