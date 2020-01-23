This package contains Cordova specific build utilities.

Features:
1. Uses the same value of version code for both: Android and iOS.
1. Adds build number info like `1.0.0.build-100` to show builds from CI in Firebase App Distribution as different builds.
1. Use `bundleId` from extended Cordova build config as `id` attribute of widget in config.xml. Both sections (debug and release) can contain different bundle ID.
