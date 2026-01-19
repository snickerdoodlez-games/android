package com.snickerdoodlez.wordpairing;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.ump.UserMessagingPlatform;

@CapacitorPlugin(name = "Privacy")
public class PrivacyPlugin extends Plugin {

    @PluginMethod
    public void showPrivacyOptionsForm(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            UserMessagingPlatform.showPrivacyOptionsForm(
                    getActivity(),
                    formError -> {
                        if (formError != null) {
                            call.reject("Error showing privacy options form: " + formError.getMessage());
                        } else {
                            call.resolve();
                        }
                    }
            );
        });
    }
}
