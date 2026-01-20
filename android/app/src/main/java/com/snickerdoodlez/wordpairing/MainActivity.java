package com.snickerdoodlez.wordpairing;

import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.community.admob.AdMob;
import com.google.android.ump.ConsentDebugSettings;
import com.google.android.ump.ConsentForm;
import com.google.android.ump.ConsentInformation;
import com.google.android.ump.ConsentRequestParameters;
import com.google.android.ump.FormError;
import com.google.android.ump.UserMessagingPlatform;

public class MainActivity extends BridgeActivity {

    private ConsentInformation consentInformation;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Register plugins
        registerPlugin(AdMob.class);
        registerPlugin(PrivacyPlugin.class);

        // Set up the User Messaging Platform consent flow with debug settings.
        ConsentDebugSettings debugSettings = new ConsentDebugSettings.Builder(this)
            .setDebugGeography(ConsentDebugSettings.DebugGeography.DEBUG_GEOGRAPHY_EEA)
            .addTestDeviceHashedId("7F80465DCA74FD235A5F793E07D72D3A")
            .build();

        ConsentRequestParameters params = new ConsentRequestParameters
            .Builder()
            .setConsentDebugSettings(debugSettings)
            .build();

        consentInformation = UserMessagingPlatform.getConsentInformation(this);
        consentInformation.requestConsentInfoUpdate(
                this,
                params,
                () -> {
                    // The consent information state was updated.
                    // You are now ready to check if a form is available.
                    UserMessagingPlatform.loadAndShowConsentFormIfRequired(
                            this,
                            loadAndShowError -> {
                                if (loadAndShowError != null) {
                                    // Consent gathering failed.
                                    Log.w("MainActivity", String.format("%s: %s",
                                            loadAndShowError.getErrorCode(),
                                            loadAndShowError.getMessage()));
                                }
                                // Consent has been gathered.
                                // The Google Mobile Ads SDK can now be initialized by the AdMob plugin.
                            }
                    );
                },
                requestConsentError -> {
                    // Consent gathering failed.
                    Log.w("MainActivity", String.format("%s: %s",
                            requestConsentError.getErrorCode(),
                            requestConsentError.getMessage()));
                });
    }
}
