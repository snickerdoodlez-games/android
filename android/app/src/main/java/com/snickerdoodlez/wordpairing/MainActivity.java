package com.snickerdoodlez.wordpairing;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.community.admob.AdMob;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        registerPlugin(AdMob.class);
        registerPlugin(PrivacyPlugin.class);
    }
}
