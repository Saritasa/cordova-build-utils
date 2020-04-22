# v1.0.2
- Update documentation.
- Add ability to use `cordovaBuildConfig.readConfigFromContext` even when Cordova CLI doesn't populate options into Cordova Context (e.g. on `before_prepare`). In this case will be used default `build.json` file.

# v1.0.1
- Add missed dependencies.
- Improve resolving of package.json.
- Always use version from package.json even when build number is undefined.


# v1.0.0

- Add utilities to work with Cordova configs.
- Add utilities to work with version info.
- Add hook for set version and package ID.
