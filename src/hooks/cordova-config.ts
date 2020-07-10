/**
* The module of cordova hooks to work with Cordova config.xml file.
*/
import * as cordovaBuildConfig from '../utils/cordova-build-config';
import * as cordovaConfig from '../utils/cordova-config';
import { getApplicationVersionInfo } from '../utils/version';
/**
 * Set version info and bundle ID in config.xml file.
 * Extract version info using "utils/version/getApplicationVersionInfo" and
 * - Set `version` to `${versionName}` or to `${versionName}.build-${buildNumber}` if build number is presented.
 * - Set android-versionCode and ios-CFBundleVersion to versionCode.
 * Extract `bundleId`, if it's presented, from Cordova build config (build.json) using "utils/cordova-build-config/readConfigFromContext"
 * @param context Cordova hook context.
 */
export function setVersionAndBundleId(context: CordovaHookContext): void {
  // Open Cordova config.xml
  const config = cordovaConfig.readConfig();

  // Get version from version.json & environment (jenkins)
  const version = getApplicationVersionInfo();
  const { buildNumber, versionName, versionCode } = version;

  // Set version for cordova app.
  if (buildNumber == null) {
    config.setVersion(versionName);
  } else {
    config.setVersion(`${versionName}.build-${buildNumber}`);
  }

  config.doc.getroot().set('android-versionCode', versionCode);
  config.doc.getroot().set('ios-CFBundleVersion', versionCode);

  // get bundle id from build config
  const { bundleId } = cordovaBuildConfig.readConfigFromContext(context)

  if (bundleId && bundleId !== config.packageName()) {
    config.setPackageName(bundleId)
  }
  
  // save changed configuration
  config.write();
}
