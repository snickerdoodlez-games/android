
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
 * Register the 'Privacy' plugin. This is the correct way to get a plugin 
 * reference in Capacitor 7 for custom native code bridges.
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
   * Generates a unique nonce using 'react-app-nonce-' and the current timestamp.
   */
  getIntegrityToken: async () => {
    try {
      const nonce = 'react-app-nonce-' + Date.now();
      const result = await NativePrivacy.getIntegrityToken({ nonce });
      const integrityToken = result.token;

      // Log the token for Android Studio Logcat debugging
      console.log('Integrity Token:', integrityToken);
      
      // Visual feedback for testing on device
      alert('Got Integrity Token! Check Logcat in Android Studio.');
      return integrityToken;

    } catch (error) {
      console.error('Error getting integrity token:', error);
      alert('Error: ' + error);
      return null;
    }
  }
};

export default Privacy;
