# =============================================================================
# ProGuard / R8 rules — Word Pairing: Category Match
# =============================================================================
# applied with: proguard-android-optimize.txt (optimization + obfuscation)
# =============================================================================

# --- Line numbers for crash stack traces ---
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# --- LeakCanary (should not be in release, but safe to ignore) ---
-dontwarn com.squareup.leakcanary.**

# --- Firebase ---
-keep class com.google.firebase.** { *; }
-dontwarn com.google.firebase.**

# --- Play Games Services v2 ---
-keep class com.google.android.gms.games.** { *; }
-keep class com.google.android.gms.auth.** { *; }
-dontwarn com.google.android.gms.tasks.**

# --- AdMob ---
-keep public class com.google.android.gms.ads.** {
   public *;
}
-keep public class com.google.ads.** {
   public *;
}

# --- Capacitor ---
-keep class com.getcapacitor.** { *; }
-keep class * extends com.getcapacitor.Plugin { *; }
-keep public class * extends com.getcapacitor.Plugin {
    public <init>(...);
}

# --- Cordova ---
-keep class org.apache.cordova.** { *; }

# --- Capacitor Community AdMob ---
-keep class com.getcapacitor.community.admob.** { *; }

# --- Compose — needed for WindowSizeClassPlugin ---
-keep class androidx.compose.material3.adaptive.** { *; }
-keep class * extends androidx.compose.runtime.Composable { *; }
-keep class com.snickerdoodlez.wordpairing.WindowSizeClassPlugin { *; }

# --- Google Play Services ---
-keep public class com.google.android.gms.* { public *; }
-dontwarn com.google.android.gms.**

# --- OkHttp (used by Firebase / Capacitor plugins) ---
-dontwarn okhttp3.**
-dontwarn okio.**

# --- Jackson (if used for JSON parsing) ---
-keepattributes Signature
-keepattributes *Annotation*
-dontwarn com.fasterxml.jackson.databind.**
-keep class com.fasterxml.jackson.databind.** { *; }
-keep class com.fasterxml.jackson.core.** { *; }

# --- Keep serializable model classes ---
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

# --- Retrofit (if used) ---
-dontwarn retrofit2.**
-keep class retrofit2.** { *; }
-keepattributes Exceptions

# --- RxJava (if used) ---
-dontwarn sun.misc.**
-keepclassmembers class rx.internal.util.unsafe.*ArrayQueue*Field* {
    long producerIndex;
    long consumerIndex;
}

# --- AndroidX ---
-keep class androidx.** { *; }
-dontwarn androidx.**

# --- WebView JavaScript interface ---
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# --- Enums ---
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# --- Parcelable ---
-keepclassmembers class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator CREATOR;
}

# --- Native methods ---
-keepclasseswithmembernames class * {
    native <methods>;
}

# --- Custom views ---
-keep public class * extends android.view.View {
    public <init>(android.content.Context);
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
    public void set*(...);
}