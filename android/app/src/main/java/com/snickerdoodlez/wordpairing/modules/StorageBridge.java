package com.snickerdoodlez.wordpairing.modules;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * StorageBridge provides a persistent SQLite-based key-value store
 * for the React Native / Capacitor bridge layer. Firebase Test Lab
 * (and the injected React Native bridge) calls execute() with SQL
 * commands and insertResult() to persist test scenario outcomes.
 *
 * The critical fix addresses a NullPointerException where
 * getWritableDatabase() was invoked on a null database helper
 * reference. The helper is now defensively initialized in load()
 * with explicit null-guards on every database access.
 */
@CapacitorPlugin(name = "StorageBridge")
public class StorageBridge extends Plugin {

    private static final String TAG = "StorageBridge";
    private static final String DATABASE_NAME = "wordpairing_storage.db";
    private static final int DATABASE_VERSION = 1;

    private DatabaseHelper dbHelper;

    /**
     * SQLiteOpenHelper implementation with lazy table creation.
     * Tables are created on first write to avoid empty-database
     * edge cases during automated testing.
     */
    private static class DatabaseHelper extends SQLiteOpenHelper {

        DatabaseHelper(Context context) {
            super(context, DATABASE_NAME, null, DATABASE_VERSION);
        }

        @Override
        public void onCreate(SQLiteDatabase db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS key_value_store ("
                    + "key TEXT PRIMARY KEY, "
                    + "value TEXT NOT NULL, "
                    + "updated_at INTEGER DEFAULT (strftime('%s','now'))"
                    + ")");
            db.execSQL("CREATE TABLE IF NOT EXISTS test_results ("
                    + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
                    + "scenario_id TEXT, "
                    + "result_json TEXT NOT NULL, "
                    + "created_at INTEGER DEFAULT (strftime('%s','now'))"
                    + ")");
            db.execSQL("CREATE TABLE IF NOT EXISTS game_state ("
                    + "state_key TEXT PRIMARY KEY, "
                    + "state_value TEXT NOT NULL"
                    + ")");
            Log.i(TAG, "Database tables created successfully");
        }

        @Override
        public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
            // Future migration path — currently no-op for v1
            Log.i(TAG, "Database upgrade from " + oldVersion + " to " + newVersion);
        }
    }

    @Override
    public void load() {
        super.load();

        // Initialize the database helper on plugin load.
        // This MUST succeed before any database operation is attempted.
        try {
            Context ctx = getContext();
            if (ctx == null) {
                Log.e(TAG, "Cannot initialize StorageBridge: context is null");
                return;
            }
            dbHelper = new DatabaseHelper(ctx.getApplicationContext());
            // Force database creation to fail-fast if there's an issue
            SQLiteDatabase db = dbHelper.getWritableDatabase();
            if (db != null) {
                Log.i(TAG, "StorageBridge database initialized successfully");
                // Don't close — keep the reference for the helper to manage
            }
        } catch (Exception e) {
            Log.e(TAG, "Failed to initialize StorageBridge database: " + e.getMessage(), e);
            dbHelper = null;
        }
    }

    /**
     * Returns a writable database instance, or null if the helper
     * was never initialized. All callers MUST null-check the return.
     */
    private SQLiteDatabase getDatabase() {
        if (dbHelper == null) {
            Log.e(TAG, "DatabaseHelper is null — StorageBridge was not properly initialized");
            return null;
        }
        try {
            return dbHelper.getWritableDatabase();
        } catch (Exception e) {
            Log.e(TAG, "Failed to get writable database: " + e.getMessage(), e);
            return null;
        }
    }

    /**
     * Generic execute method called by the React Native bridge.
     * Supports 'INSERT', 'SELECT', and 'EXISTS' command types.
     *
     * Expected call format:
     * { "command": "INSERT|SELECT|EXISTS", "sql": "...", "params": [...] }
     */
    @PluginMethod
    public void execute(PluginCall call) {
        String command = call.getString("command");
        String sql = call.getString("sql");
        JSArray paramsArray = call.getArray("params");

        if (command == null || sql == null) {
            call.reject("Missing required parameters: 'command' and 'sql'");
            return;
        }

        SQLiteDatabase db = getDatabase();
        if (db == null) {
            call.reject("Database is not available — StorageBridge not initialized");
            return;
        }

        try {
            switch (command.toUpperCase()) {
                case "INSERT": {
                    String[] bindArgs = convertParams(paramsArray);
                    db.execSQL(sql, bindArgs);
                    JSObject result = new JSObject();
                    result.put("success", true);
                    call.resolve(result);
                    break;
                }
                case "SELECT": {
                    String[] bindArgs = convertParams(paramsArray);
                    Cursor cursor = db.rawQuery(sql, bindArgs);
                    JSONArray rows = new JSONArray();
                    try {
                        while (cursor.moveToNext()) {
                            JSONObject row = new JSONObject();
                            for (int i = 0; i < cursor.getColumnCount(); i++) {
                                String colName = cursor.getColumnName(i);
                                String colValue = cursor.getString(i);
                                row.put(colName, colValue);
                            }
                            rows.put(row);
                        }
                    } finally {
                        cursor.close();
                    }
                    JSObject result = new JSObject();
                    result.put("success", true);
                    result.put("rows", rows);
                    call.resolve(result);
                    break;
                }
                case "EXISTS": {
                    String[] bindArgs = convertParams(paramsArray);
                    Cursor cursor = db.rawQuery(sql, bindArgs);
                    try {
                        boolean exists = cursor.moveToFirst();
                        JSObject result = new JSObject();
                        result.put("success", true);
                        result.put("exists", exists);
                        call.resolve(result);
                    } finally {
                        cursor.close();
                    }
                    break;
                }
                default:
                    call.reject("Unknown command: " + command);
                    break;
            }
        } catch (Exception e) {
            Log.e(TAG, "Error executing command '" + command + "': " + e.getMessage(), e);
            call.reject("Database error: " + e.getMessage(), e);
        }
    }

    /**
     * Inserts a test result record. Called by Firebase Test Lab's
     * automated test runner to persist scenario outcomes.
     *
     * Expected call format:
     * { "scenarioId": "scenario_0", "data": { ... } }
     */
    @PluginMethod
    public void insertResult(PluginCall call) {
        String scenarioId = call.getString("scenarioId", "unknown");
        JSObject data = call.getObject("data");

        if (data == null) {
            call.reject("Missing 'data' parameter");
            return;
        }

        SQLiteDatabase db = getDatabase();
        if (db == null) {
            // Log but don't crash — the app can still function without persistence
            Log.w(TAG, "Cannot insert result — database not available");
            call.reject("Database is not available — StorageBridge not initialized");
            return;
        }

        try {
            String resultJson = data.toString();
            db.execSQL(
                "INSERT OR REPLACE INTO test_results (scenario_id, result_json) VALUES (?, ?)",
                new String[] { scenarioId, resultJson }
            );
            JSObject result = new JSObject();
            result.put("success", true);
            result.put("scenarioId", scenarioId);
            call.resolve(result);
        } catch (Exception e) {
            Log.e(TAG, "Failed to insert result: " + e.getMessage(), e);
            call.reject("Failed to insert result: " + e.getMessage(), e);
        }
    }

    /**
     * Retrieves a value from the key-value store.
     */
    @PluginMethod
    public void get(PluginCall call) {
        String key = call.getString("key");
        if (key == null) {
            call.reject("Missing 'key' parameter");
            return;
        }

        SQLiteDatabase db = getDatabase();
        if (db == null) {
            call.reject("Database not available");
            return;
        }

        try {
            Cursor cursor = db.rawQuery(
                "SELECT value FROM key_value_store WHERE key = ?",
                new String[] { key }
            );
            try {
                JSObject result = new JSObject();
                if (cursor.moveToFirst()) {
                    result.put("value", cursor.getString(0));
                    result.put("found", true);
                } else {
                    result.put("value", JSONObject.NULL);
                    result.put("found", false);
                }
                call.resolve(result);
            } finally {
                cursor.close();
            }
        } catch (Exception e) {
            Log.e(TAG, "Failed to get value for key '" + key + "': " + e.getMessage(), e);
            call.reject("Database error: " + e.getMessage(), e);
        }
    }

    /**
     * Stores a value in the key-value store.
     */
    @PluginMethod
    public void set(PluginCall call) {
        String key = call.getString("key");
        String value = call.getString("value");
        if (key == null || value == null) {
            call.reject("Missing 'key' or 'value' parameter");
            return;
        }

        SQLiteDatabase db = getDatabase();
        if (db == null) {
            call.reject("Database not available");
            return;
        }

        try {
            db.execSQL(
                "INSERT OR REPLACE INTO key_value_store (key, value, updated_at) VALUES (?, ?, strftime('%s','now'))",
                new String[] { key, value }
            );
            JSObject result = new JSObject();
            result.put("success", true);
            call.resolve(result);
        } catch (Exception e) {
            Log.e(TAG, "Failed to set value for key '" + key + "': " + e.getMessage(), e);
            call.reject("Database error: " + e.getMessage(), e);
        }
    }

    /**
     * Removes a key from the key-value store.
     */
    @PluginMethod
    public void remove(PluginCall call) {
        String key = call.getString("key");
        if (key == null) {
            call.reject("Missing 'key' parameter");
            return;
        }

        SQLiteDatabase db = getDatabase();
        if (db == null) {
            call.reject("Database not available");
            return;
        }

        try {
            db.execSQL("DELETE FROM key_value_store WHERE key = ?", new String[] { key });
            JSObject result = new JSObject();
            result.put("success", true);
            call.resolve(result);
        } catch (Exception e) {
            Log.e(TAG, "Failed to remove key '" + key + "': " + e.getMessage(), e);
            call.reject("Database error: " + e.getMessage(), e);
        }
    }

    /**
     * Clears all stored data from the database.
     */
    @PluginMethod
    public void clear(PluginCall call) {
        SQLiteDatabase db = getDatabase();
        if (db == null) {
            call.reject("Database not available");
            return;
        }

        try {
            db.execSQL("DELETE FROM key_value_store");
            db.execSQL("DELETE FROM test_results");
            db.execSQL("DELETE FROM game_state");
            JSObject result = new JSObject();
            result.put("success", true);
            call.resolve(result);
        } catch (Exception e) {
            Log.e(TAG, "Failed to clear database: " + e.getMessage(), e);
            call.reject("Database error: " + e.getMessage(), e);
        }
    }

    /**
     * Converts a JSArray of parameter values to a String array
     * for use with SQLite execSQL/rawQuery bind arguments.
     */
    private static String[] convertParams(JSArray paramsArray) {
        if (paramsArray == null || paramsArray.length() == 0) {
            return new String[0];
        }
        String[] result = new String[paramsArray.length()];
        try {
            for (int i = 0; i < paramsArray.length(); i++) {
                Object val = paramsArray.get(i);
                result[i] = val != null ? val.toString() : null;
            }
        } catch (JSONException e) {
            Log.w(TAG, "Error converting params array: " + e.getMessage());
        }
        return result;
    }
}