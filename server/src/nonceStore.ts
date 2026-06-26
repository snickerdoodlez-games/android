/**
 * Nonce Store — Manages cryptographic nonce generation, storage, and validation
 * for Play Integrity replay protection.
 *
 * Nonces prevent replay attacks where an attacker captures a valid integrity token
 * and tries to reuse it. Each nonce is single-use and expires after a configured TTL.
 */

import { v4 as uuidv4 } from 'uuid';

import type { NonceResult } from './types.js';

/** How long a nonce remains valid (in milliseconds) — default: 5 minutes */
const NONCE_TTL_MS = 5 * 60 * 1000;

/**
 * In-memory nonce store.
 * In production, replace with Redis or a DB for persistence across server restarts.
 */
interface StoredNonce {
  /** The nonce value */
  value: string;
  /** When this nonce was created (epoch ms) */
  createdAt: number;
  /** When this nonce expires (epoch ms) */
  expiresAt: number;
  /** Whether this nonce has been used (single-use enforcement) */
  used: boolean;
}

/** Map of nonce values to their metadata */
const nonceMap = new Map<string, StoredNonce>();

/**
 * Clean up expired nonces periodically.
 * Nonces older than TTL are removed to prevent memory leaks.
 */
function cleanupExpiredNonces(): void {
  const now = Date.now();
  for (const [key, entry] of nonceMap.entries()) {
    if (entry.expiresAt < now) {
      nonceMap.delete(key);
    }
  }
}

// Run cleanup every 60 seconds
setInterval(cleanupExpiredNonces, 60_000);

/**
 * Generate a new cryptographically unique nonce.
 * Stores it server-side with an expiration time.
 *
 * @returns NonceResult containing the nonce value and expiration
 */
export function generateNonce(): NonceResult {
  // Use UUID v4 for nonce generation — it's cryptographically random
  const nonce = uuidv4();

  const now = Date.now();
  const entry: StoredNonce = {
    value: nonce,
    createdAt: now,
    expiresAt: now + NONCE_TTL_MS,
    used: false,
  };

  nonceMap.set(nonce, entry);

  return {
    nonce,
    expiresAt: new Date(entry.expiresAt).toISOString(),
  };
}

/**
 * Validate and consume a nonce.
 * A nonce is valid if:
 *   - It exists in the store
 *   - It has not expired
 *   - It has not been used before
 *
 * Once validated, the nonce is marked as "used" (single-use enforcement).
 *
 * @param nonce - The nonce value to validate
 * @returns true if the nonce is valid and was consumed, false otherwise
 */
export function validateAndConsumeNonce(nonce: string): boolean {
  const entry = nonceMap.get(nonce);

  if (!entry) {
    return false; // Nonce not found in store
  }

  if (entry.expiresAt < Date.now()) {
    nonceMap.delete(nonce);
    return false; // Nonce has expired
  }

  if (entry.used) {
    return false; // Nonce has already been used — possible replay attempt
  }

  // Mark as used (single-use enforcement)
  entry.used = true;

  return true;
}

/**
 * Get the number of currently active nonces.
 * Useful for monitoring and debugging.
 */
export function getActiveNonceCount(): number {
  cleanupExpiredNonces();
  return nonceMap.size;
}