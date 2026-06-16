package com.snickerdoodlez.wordpairing;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.assertNotNull;

/**
 * Local unit tests for PrivacyPlugin.
 *
 * PrivacyPlugin is a minimal plugin (currently a stub). This test
 * verifies that the plugin can be instantiated and basic contract
 * is maintained.
 */
@RunWith(MockitoJUnitRunner.class)
public class PrivacyPluginTest {

    @Test
    public void instantiatePrivacyPlugin_succeeds() {
        PrivacyPlugin plugin = new PrivacyPlugin();
        assertNotNull("PrivacyPlugin should be instantiable", plugin);
    }

    @Test
    public void pluginAnnotation_nameIsPrivacy() {
        PrivacyPlugin plugin = new PrivacyPlugin();
        com.getcapacitor.annotation.CapacitorPlugin annotation =
                plugin.getClass().getAnnotation(
                        com.getcapacitor.annotation.CapacitorPlugin.class
                );
        assertNotNull("PrivacyPlugin should have @CapacitorPlugin annotation", annotation);
        assertNotNull("Plugin name should be set", annotation.name());
        // The name should match what the JavaScript side expects
        org.junit.Assert.assertEquals("Plugin name should be 'Privacy'",
                "Privacy", annotation.name());
    }
}
