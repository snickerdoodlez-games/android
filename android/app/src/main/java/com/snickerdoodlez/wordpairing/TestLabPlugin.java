package com.snickerdoodlez.wordpairing;

import android.content.Intent;
import android.os.Bundle;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;

/**
 * TestLabPlugin intercepts the Firebase Test Lab TEST_LOOP intent,
 * extracts the target result file path, and exposes a method for the
 * JavaScript layer to write test scenario results to that file.
 *
 * This enables Firebase Test Lab to harvest a populated results_scenario_0.json
 * instead of a blank 0-byte file.
 */
@CapacitorPlugin(name = "TestLab")
public class TestLabPlugin extends Plugin {

    private String testLabResultPath = null;

    @Override
    public void load() {
        super.load();
        // Check if the app was launched via Firebase Test Lab (TEST_LOOP or CHOREOGRAPHER intent)
        Intent intent = getActivity().getIntent();
        if (intent != null && (
            "com.google.intent.action.TEST_LOOP".equals(intent.getAction()) ||
            "com.google.intent.action.CHOREOGRAPHER".equals(intent.getAction())
        )) {
            Bundle extras = intent.getExtras();
            if (extras != null) {
                // Firebase Test Lab passes the target file path in the extras.
                // Common keys: "scenario" or "results_file_path"
                for (String key : extras.keySet()) {
                    Object value = extras.get(key);
                    if (value instanceof String) {
                        String strVal = (String) value;
                        // Look for the result directory path — Test Lab usually
                        // passes a directory where results_scenario_0.json lives
                        if (strVal.contains("results") || strVal.contains("scenario")) {
                            testLabResultPath = strVal;
                            break;
                        }
                    }
                }
                // Fallback: use the data URI if no explicit path was found in extras
                if (testLabResultPath == null && extras.containsKey("scenario")) {
                    testLabResultPath = extras.getString("scenario");
                }
            }
        }
    }

    /**
     * Returns whether this app instance was launched by Firebase Test Lab.
     */
    @PluginMethod
    public void isTestLabRun(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("isTestLab", testLabResultPath != null);
        ret.put("resultPath", testLabResultPath != null ? testLabResultPath : "");
        call.resolve(ret);
    }

    /**
     * Writes test results JSON to the Firebase Test Lab result file.
     * Called from the JavaScript layer when the automated test scenario
     * has completed.
     *
     * @param call Expects { "data": { ... } } — a JSON-serializable object
     *             containing test results (status, score, errors, etc.)
     */
    @PluginMethod
    public void writeResults(PluginCall call) {
        if (testLabResultPath == null) {
            call.reject("Not a Test Lab run. No result path configured.");
            return;
        }

        try {
            JSObject resultsData = call.getObject("data");
            if (resultsData == null) {
                call.reject("Missing 'data' parameter with test results.");
                return;
            }

            // Determine the actual file to write — append results_scenario_0.json
            // if the path points to a directory, otherwise use it directly
            File targetFile;
            File pathFile = new File(testLabResultPath);
            if (pathFile.isDirectory()) {
                targetFile = new File(pathFile, "results_scenario_0.json");
            } else {
                // Ensure parent directories exist
                File parent = pathFile.getParentFile();
                if (parent != null && !parent.exists()) {
                    parent.mkdirs();
                }
                targetFile = pathFile;
            }

            String jsonString = resultsData.toString();

            try (FileOutputStream fos = new FileOutputStream(targetFile);
                 OutputStreamWriter writer = new OutputStreamWriter(fos, StandardCharsets.UTF_8)) {
                writer.write(jsonString);
                writer.flush();
                fos.getFD().sync(); // Flush to disk
            }

            JSObject ret = new JSObject();
            ret.put("success", true);
            ret.put("filePath", targetFile.getAbsolutePath());
            ret.put("bytesWritten", jsonString.length());
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to write test results: " + e.getMessage(), e);
        }
    }

    /**
     * Returns the target result path for Test Lab, or empty string if not in test mode.
     */
    @PluginMethod
    public void getResultPath(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("resultPath", testLabResultPath != null ? testLabResultPath : "");
        call.resolve(ret);
    }
}