
import { AdMob } from '@capacitor-community/admob';
import { Capacitor, registerPlugin } from '@capacitor/core';

/**
 * Define the interface for the custom native Privacy plugin.
 * This ensures TypeScript support when calling native methods.
 */
interface PrivacyPlugin {
  getIntegrityToken(options: { nonce: string }): Promise<{ token: string }>;
}

/**
 * Register the 'Privacy' plugin. 
 * registerPlugin is the correct API for Capacitor 3+ (replacing registerWebPlugin).
 */
const NativePrivacy = registerPlugin<PrivacyPlugin>('Privacy');

const Privacy = {
  /**
   * Shows the AdMob privacy options form (UMP) on native platforms.
   */
  showPrivacyOptionsForm: async () => {
    if (Capacitor.isNativePlatform()) {
      try {
        await AdMob.showPrivacyOptionsForm();
      } catch (e) {
        console.warn("Privacy form not available or failed to show:", e);
      }
    } else {
      console.log("Privacy options form requested (Web Fallback)");
    }
  },

  /**
   * getIntegrityToken: Calls the native Play Integrity API.
   */
  getIntegrityToken: async () => {
    if (!Capacitor.isNativePlatform()) {
      console.warn("Integrity Token is not supported on the web platform.");
      return null;
    }

    try {
      const nonce = 'react-app-nonce-' + Date.now();
      const result = await NativePrivacy.getIntegrityToken({ nonce });
      const integrityToken = result.token;

      // Log the token for Android Studio Logcat debugging
      console.log('Integrity Token:', integrityToken);
      return integrityToken;

    } catch (error) {
      console.error('Error getting integrity token:', error);
      return null;
    }
  }
};

export default Privacy;
