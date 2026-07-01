# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile

# Firebase
-keep class com.google.firebase.** { *; }
-dontwarn com.google.firebase.**

# AdMob
-keep public class com.google.android.gms.ads.** {
   public *;
}

-keep public class com.google.ads.** {
   public *;
}

# Capacitor
-keep class com.getcapacitor.** { *; }
-keep class * extends com.getcapacitor.Plugin { *; }
-keep public class * extends com.getcapacitor.Plugin {
    public <init>(...);
}

# Cordova
-keep class org.apache.cordova.** { *; }

# Capacitor Community AdMob
-keep class com.getcapacitor.community.admob.** { *; }

# Keep classes used via reflection
-keep class com.snickerdoodlez.wordpairing.models.** { *; }

# Keep specific library interfaces
-keep interface com.example.lib.** { *; }