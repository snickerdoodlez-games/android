package com.snickerdoodlez.wordpairing;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.community.admob.AdMob;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // The AdMob plugin now handles all initialization from the web view.
        // All UMP consent flow and MobileAds.initialize() calls have been removed.
        registerPlugin(AdMob.class);
    }
}
