package com.snickerdoodlez.wordpairing;

import android.util.Log;
import androidx.appcompat.app.AppCompatActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.ump.ConsentDebugSettings;
import com.google.android.ump.ConsentInformation;
import com.google.android.ump.ConsentRequestParameters;
import com.google.android.ump.UserMessagingPlatform;

@CapacitorPlugin(name = "Consent")
public class ConsentPlugin extends Plugin {

    private ConsentInformation consentInformation;

    @PluginMethod
    public void requestConsent(PluginCall call) {
        AppCompatActivity activity = getActivity();
        JSObject ret = new JSObject();

        // Set up the User Messaging Platform consent flow with debug settings.
        ConsentDebugSettings debugSettings = new ConsentDebugSettings.Builder(activity)
                .setDebugGeography(ConsentDebugSettings.DebugGeography.DEBUG_GEOGRAPHY_EEA)
                .addTestDeviceHashedId("7F80465DCA74FD235A5F793E07D72D3A")
                .build();

        ConsentRequestParameters params = new ConsentRequestParameters
                .Builder()
                .setConsentDebugSettings(debugSettings)
                .build();

        consentInformation = UserMessagingPlatform.getConsentInformation(activity);
        consentInformation.requestConsentInfoUpdate(
                activity,
                params,
                () -> {
                    UserMessagingPlatform.loadAndShowConsentFormIfRequired(
                            activity,
                            loadAndShowError -> {
                                if (loadAndShowError != null) {
                                    Log.w(
                                            "ConsentPlugin",
                                            String.format(
                                                    "%s: %s",
                                                    loadAndShowError.getErrorCode(),
                                                    loadAndShowError.getMessage()
                                            )
                                    );
                                    call.reject("Consent form load failed.");
                                    return;
                                }
                                // Consent has been gathered.
                                ret.put("consent", "obtained");
                                call.resolve(ret);
                            }
                    );
                },
                requestConsentError -> {
                    Log.w(
                            "ConsentPlugin",
                            String.format(
                                    "%s: %s",
                                    requestConsentError.getErrorCode(),
                                    requestConsentError.getMessage()
                            )
                    );
                    call.reject("Consent info request failed.");
                }
        );
    }
}
    