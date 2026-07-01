import { AdMob, AdmobConsentStatus } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

/**
 * Persistent storage keys for consent state.
 * Stored in localStorage so consent decisions survive app restarts.
 */
const STORAGE_KEY_CONSENT_STATUS = 'wpm_consent_status';
const STORAGE_KEY_CONSENT_FORM_SHOWN = 'wpm_consent_form_shown';
const STORAGE_KEY_PRIVACY_OPTIONS_REQUIRED = 'wpm_privacy_options_required';
const STORAGE_KEY_TC_STRING = 'wpm_tc_string';

/**
 * Consent decision cached in memory for zero-latency reads during gameplay.
 */
let cachedConsentStatus: AdmobConsentStatus | null = null;
let cachedPrivacyOptionsRequired: boolean | null = null;

// ── Persistence Helpers ──

const persistConsentStatus = (status: AdmobConsentStatus): void => {
  try {
    localStorage.setItem(STORAGE_KEY_CONSENT_STATUS, status);
    cachedConsentStatus = status;
  } catch { /* localStorage may be unavailable in some WebView scenarios */ }
};

const persistPrivacyOptionsRequired = (required: boolean): void => {
  try {
    localStorage.setItem(STORAGE_KEY_PRIVACY_OPTIONS_REQUIRED, String(required));
    cachedPrivacyOptionsRequired = required;
  } catch { }
};

const persistTCString = (tcString: string | undefined): void => {
  try {
    if (tcString) localStorage.setItem(STORAGE_KEY_TC_STRING, tcString);
    else localStorage.removeItem(STORAGE_KEY_TC_STRING);
  } catch { }
};

const persistFormShown = (): void => {
  try {
    localStorage.setItem(STORAGE_KEY_CONSENT_FORM_SHOWN, Date.now().toString());
  } catch { }
};

// ── Public API ──

/**
 * Consent management singleton for GDPR/UMP compliance.
 *
 * This module wraps AdMob's User Messaging Platform (UMP) SDK to provide:
 *  - Explicit consent collection before ads or analytics initialize
 *  - Persistent consent status across app restarts
 *  - Privacy options form re-display (right to change consent)
 *  - TC string access for IAB TCF v2.2 compliance
 */
const Consent = {
  /**
   * Get the last known consent status.
   * Returns cached in-memory value if available, otherwise falls back
   * to localStorage, then defaults to UNKNOWN.
   */
  getConsentStatus: (): AdmobConsentStatus => {
    if (cachedConsentStatus !== null) return cachedConsentStatus;

    try {
      const stored = localStorage.getItem(STORAGE_KEY_CONSENT_STATUS);
      if (stored && Object.values(AdmobConsentStatus).includes(stored as AdmobConsentStatus)) {
        cachedConsentStatus = stored as AdmobConsentStatus;
        return cachedConsentStatus;
      }
    } catch { }

    return AdmobConsentStatus.UNKNOWN;
  },

  /**
   * Returns true if the privacy options entry point must be shown
   * (required by GDPR for users in EEA/UK regions).
   */
  isPrivacyOptionsRequired: (): boolean => {
    if (cachedPrivacyOptionsRequired !== null) return cachedPrivacyOptionsRequired;

    try {
      const stored = localStorage.getItem(STORAGE_KEY_PRIVACY_OPTIONS_REQUIRED);
      cachedPrivacyOptionsRequired = stored === 'true';
      return cachedPrivacyOptionsRequired;
    } catch {
      return false;
    }
  },

  /**
   * Whether consent has been collected (the form has been shown at least once).
   * Used to determine if we need to block ads until consent is obtained.
   */
  hasConsentBeenCollected: (): boolean => {
    try {
      return localStorage.getItem(STORAGE_KEY_CONSENT_FORM_SHOWN) !== null;
    } catch {
      return false;
    }
  },

  /**
   * Get the stored IAB Transparency & Consent (TC) string.
   * Returns undefined if not yet collected.
   */
  getTCString: (): string | undefined => {
    try {
      return localStorage.getItem(STORAGE_KEY_TC_STRING) || undefined;
    } catch {
      return undefined;
    }
  },

  /**
   * Initialize the consent flow. This MUST be called before any ads are loaded.
   *
   * Flow:
   *  1. Check if consent is already stored (from a previous session)
   *  2. If not, request consent info from UMP SDK
   *  3. If consent is required, load and show the consent form
   *  4. On form dismissal, banner ads are started by the caller
   *
   * @returns The resolved consent status after the flow completes.
   */
  initializeConsent: async (): Promise<AdmobConsentStatus> => {
    // If we already have consent stored from a prior session, skip the form
    if (Consent.hasConsentBeenCollected()) {
      const stored = Consent.getConsentStatus();
      if (stored !== AdmobConsentStatus.UNKNOWN) {
        return stored;
      }
      // Form was shown but status is UNKNOWN — need to re-request
    }

    // Not running on native (e.g., dev browser) — treat as not-required
    if (!Capacitor.isNativePlatform()) {
      persistConsentStatus(AdmobConsentStatus.NOT_REQUIRED);
      persistFormShown();
      persistPrivacyOptionsRequired(false);
      return AdmobConsentStatus.NOT_REQUIRED;
    }

    try {
      // Step 1: Request consent info from Google's UMP SDK
      const consentInfo = await AdMob.requestConsentInfo();

      // Persist privacy options requirement
      const privacyRequired = consentInfo.privacyOptionsRequirementStatus === 'REQUIRED';
      persistPrivacyOptionsRequired(privacyRequired);

      // Step 2: If consent form is available and consent is required, show it
      if (consentInfo.isConsentFormAvailable && consentInfo.status === AdmobConsentStatus.REQUIRED) {
        try {
          // Race the consent form against a 10-second timeout to prevent ANR.
          // The UMP SDK loads a WebView on the main thread via loadDataWithBaseURL,
          // which can block long enough to trigger the ANR watchdog.
          const CONSENT_FORM_TIMEOUT_MS = 10_000;
          const formResult = await Promise.race([
            AdMob.showConsentForm(),
            new Promise<never>((_, reject) =>
              setTimeout(() => reject(new Error('CONSENT_FORM_TIMEOUT')), CONSENT_FORM_TIMEOUT_MS)
            ),
          ]);
          persistConsentStatus(formResult.status);
          persistTCString(formResult.tcString);
        } catch (formError) {
          console.warn('Consent form failed to show, timed out, or was dismissed:', formError);
          // User dismissed or form failed — treat as no consent obtained.
          // Ads will serve non-personalized by default when consent is missing.
          persistConsentStatus(AdmobConsentStatus.NOT_REQUIRED);
        }
      } else {
        // Consent not required (e.g., non-EEA user) or form not available
        persistConsentStatus(consentInfo.status);
      }

      persistFormShown();
      return Consent.getConsentStatus();
    } catch (error) {
      console.error('Consent initialization failed:', error);
      // Fallback: treat as OBTAINED so the app can function
      // (ads will serve non-personalized by default when consent is missing)
      persistConsentStatus(AdmobConsentStatus.OBTAINED);
      persistFormShown();
      return AdmobConsentStatus.OBTAINED;
    }
  },

  /**
   * Re-open the privacy options form so the user can change their consent choices.
   * Required by GDPR to be accessible at all times.
   */
  showPrivacyOptionsForm: async (): Promise<void> => {
    if (!Capacitor.isNativePlatform()) {
      // On web, redirect to a privacy settings page
      window.open('https://snickerdoodlez.online/privacy_policy/privacy_policy.html', '_blank');
      return;
    }

    try {
      await AdMob.showPrivacyOptionsForm();
    } catch (error) {
      console.warn('Privacy options form failed:', error);
      throw error;
    }
  },

  /**
   * Reset all consent data. This allows the user to start the consent flow
   * fresh on next app launch (useful for "Delete My Data" functionality).
   */
  resetConsent: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY_CONSENT_STATUS);
      localStorage.removeItem(STORAGE_KEY_CONSENT_FORM_SHOWN);
      localStorage.removeItem(STORAGE_KEY_PRIVACY_OPTIONS_REQUIRED);
      localStorage.removeItem(STORAGE_KEY_TC_STRING);
    } catch { }

    // Clear in-memory cache
    cachedConsentStatus = null;
    cachedPrivacyOptionsRequired = null;

    // If on native, also attempt to reset UMP consent via AdMob
    if (Capacitor.isNativePlatform()) {
      try {
        AdMob.resetConsentInfo().catch(() => {
          // resetConsentInfo might not be available on all SDK versions
        });
      } catch { }
    }
  },
};

export default Consent;