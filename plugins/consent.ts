import { registerPlugin } from '@capacitor/core';

/**
 * Native interface for the AdMob Consent plugin.
 * Handles GDPR requirements for European users.
 */
export const Consent = registerPlugin<{
  showConsent(): Promise<{ shown: boolean }>;
}>('Consent');
