package com.snickerdoodlez.wordpairing;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // com.snickerdoodlez.wordpairing.FirebaseRtdbKt.readAllPuzzles();
    }

    @Override
    public void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        // Add your game state saving logic here
        // outState.putInt("YOUR_GAME_STATE_KEY", yourGameState);
    }

    @Override
    public void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        // Add your game state restoring logic here
        // yourGameState = savedInstanceState.getInt("YOUR_GAME_STATE_KEY");
    }
}
