# Cordova build tools

This package contains Cordova specific build utilities

Features:
1. [Versioning](#Versioning) - uses unified approach to set version code  and version name for both: Android and iOS.
1. [Build number information](#Build-number-information) - adds build number info like `1.0.0.build-100` to show builds from CI in Firebase App Distribution as different builds e.g.
1. [Set bundle ID](Set-bundle-ID) - use `bundleId` from extended Cordova build config as `id` attribute of widget in config.xml. Both sections (debug and release) can contain different bundle ID.

## Versioning

The `setVersionAndBundleId` hook retrieve version from the main `package.json` (used as source of truth) using the `utils/version.js` and create two kind of versions:
1. Version name (`version` attribute in `config.xml`) - SemVer from the `package.json` as is. Uses as "displayable" value.
1. Version code (`android-versionCode` and `ios-CFBundleVersion`) - number presentation of version. Uses approach of Android platform (see [docs](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#setting-the-version-code) for more details). We reuse the same approach for both platforms to get unified approach for version code to prevent confusing and easily detect that Android and iOS applications are the same version or not.

## Build number information

The `utils/version.js` also retrieve build number from the `BUILD_NUMBER` environment variable and if it presented, the `setVersionAndBundleId` hook add this information to the version name or skip this step if the `BUILD_NUMBER` is not presented or is empty/not a number. 

The `BUILD_NUMBER` automatically provided by Jenkins e.g. and you don't have to do it manually but if you want skip this step (usually for prod buildings) you can just set it to an empty string before call build command.

```
BUILD_NUMBER='' <build command>
```

## Set bundle ID

This utilities package support dynamically changing bundleId of an application during building process.
The `setVersionAndBundleId` retrieves `bundleId` property from certain section (platform + mode) of used `build.json` file. If the `bundleId` is not presented then this step will be skipped and original `bundleId` in `config.xml` will no be changed.

For instance if you want to use different bundle ID for release build you should add `bundleId` into the release section for certain platforms:

``` json
{
	"ios": {
		"debug": {
			// Not bundleId presented then bundleID from config.xml will be used
		},
		"release": {
			...,
      "bundleId": "com.bundleid.for.release.mode"
		}
	},
	"android": {
    "debug": {
			// Not bundleId presented then bundleID from config.xml will be used
		},
		"release": {
			...,
      "bundleId": "com.bundleid.for.release.mode"
		}
	}
}

```
