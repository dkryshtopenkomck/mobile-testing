Test if browser installed (any app) by package name

```"$ANDROID_HOME"/platform-tools/adb -s emulator-5554 shell pm list packages com.android.chrome```

Start test

npx nightwatch nightwatch/mobile-app-tests/wikipedia-android.js --env app.android.emulator
