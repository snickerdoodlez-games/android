package com.snickerdoodlez.wordpairing;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Privacy")
public class PrivacyPlugin extends Plugin {

    @PluginMethod
    public void showConsentForm(PluginCall call) {
        // Implement your consent form logic here
        JSObject ret = new JSObject();
        ret.put("value", true);
        call.resolve(ret);
    }
}
