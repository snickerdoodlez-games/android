/**
 * Type definitions for Google Play Integrity API integration.
 */

/**
 * Structured response from Google's Play Integrity decodeIntegrityToken endpoint.
 */
export interface DecodeIntegrityResponse {
  /** Token payload external wrapper */
  tokenPayloadExternal: IntegrityVerdict;
}

/**
 * The full integrity verdict returned by Google.
 */
export interface IntegrityVerdict {
  /** Application integrity verdict */
  appIntegrity: AppIntegrity;
  /** Device integrity verdict */
  deviceIntegrity: DeviceIntegrity;
  /** Account details (optional) */
  accountDetails?: AccountDetails;
  /** Environment risk details */
  environmentDetails: EnvironmentDetails;
  /** Request details (nonce, etc.) */
  requestDetails?: RequestDetails;
}

/**
 * Application-level integrity verdict.
 */
export interface AppIntegrity {
  /** App recognition verdict: PLAY_RECOGNIZED, UNRECOGNIZED_VERSION, UNEVALUATED */
  appRecognitionVerdict: 'PLAY_RECOGNIZED' | 'UNRECOGNIZED_VERSION' | 'UNEVALUATED';
  /** Package name Google evaluated */
  packageName?: string;
  /** Certificate SHA-256 digest(s) of the app signing certificates */
  certificateSha256Digest?: string[];
}

/**
 * Device-level integrity verdict.
 */
export interface DeviceIntegrity {
  /** Device recognition verdict(s) */
  deviceRecognitionVerdict: Array<
    'MEETS_DEVICE_INTEGRITY' | 'MEETS_BASIC_INTEGRITY' | 'MEETS_STRONG_INTEGRITY' |
    'MEETS_VIRTUAL_INTEGRITY' | 'UNEVALUATED'
  >;
  /** Recent device activity level (used for bot detection) */
  recentDeviceActivity?: DeviceActivityLevel;
  deviceAttributes?: DeviceAttributes;
}

export interface DeviceAttributes {
  /** Aggregated results from CTS compatibility suite */
  ctsProfileMatch?: boolean;
  /** Whether the device has a hardware-backed key attestation */
  hardwareBacked?: boolean;
}

export interface DeviceActivityLevel {
  /** Device activity level */
  deviceActivityLevel?: 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_UNSPECIFIED';
}

export interface AccountDetails {
  /** App licensing verdict */
  appLicensingVerdict?: 'LICENSED' | 'UNLICENSED' | 'UNEVALUATED';
}

export interface EnvironmentDetails {
  /** App access risk verdict */
  appAccessRiskVerdict: AppAccessRiskVerdict;
  /** Play Protect verdict */
  playProtectVerdict?: 'PLAY_PROTECT_ENABLED' | 'PLAY_PROTECT_DISABLED' | 'UNEVALUATED';
}

export interface AppAccessRiskVerdict {
  /** Detected apps that may be capturing or interacting with the app */
  appsDetected?: Array<'UNKNOWN_CAPTURING' | 'KNOWN_CAPTURING' | 'UNKNOWN_INSTALLED' | 'KNOWN_INSTALLED'>;
  /** Whether a virtual display or screen casting is active */
  virtualDisplayDetected?: boolean;
}

export interface RequestDetails {
  /** Nonce the client provided (must match) */
  nonce?: string;
  /** Timestamp of the request */
  requestTimestamp?: string;
  /** The request package name */
  requestPackageName?: string;
}

/**
 * Result of the server-side integrity evaluation.
 */
export interface IntegrityEvaluation {
  /** Whether access should be granted */
  isAllowed: boolean;
  /** Human-readable reason for the decision */
  reason: string;
  /** Detailed breakdown for logging */
  details?: IntegrityDetails;
}

export interface IntegrityDetails {
  appVerdict: string;
  deviceVerdicts: string[];
  environmentRisks: string[];
  deviceIsSecure: boolean;
  appIsRecognized: boolean;
}

/**
 * Nonce generation result.
 */
export interface NonceResult {
  /** The generated nonce value */
  nonce: string;
  /** When this nonce expires (ISO 8601) */
  expiresAt: string;
}