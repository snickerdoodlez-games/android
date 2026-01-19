
import { Capacitor } from '@capacitor/core';
import { AdMob } from '@capacitor-community/admob';

const Privacy = {
  async showPrivacyOptionsForm(): Promise<void> {
    if (Capacitor.getPlatform() === 'web') {
      console.log('Privacy options are managed by the browser or not applicable.');
      return;
    }

    try {
      // Use AdMob's built-in consent form display.
      // This maps to the UMP SDK's functionality for managing privacy options.
      console.log('PrivacyService: Invoking AdMob.showConsentForm()');
      await AdMob.showConsentForm();
    } catch (error) {
      console.error('PrivacyService: Failed to open consent form', error);
      throw error;
    }
  }
};

export default Privacy;
