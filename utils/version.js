const path = require('path');

/**
 * @typedef VersionInfo
 * @property {number} major 
 * @property {number} major Major version part.
 * @property {number} minor Minor version part.
 * @property {number} patch Patch version part.
 * @property {number|null} buildNumber Build number extracted from `process.env.BUILD_NUMBER`.
 * @property {string} versionName String presentation of version extracted from `version` section of package.json.
 * @property {number} versionCode Numeric presentation of version. Calculated as major * 10000 + minor * 100 + patch (https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#setting-the-version-code).
 *
 * Obtains version info from package.json and extract build number from the BUILD_NUMBER env variable.
 * @returns {VersionInfo}
 */
function getApplicationVersionInfo() {
  const packageConfigPath = path.resolve('package.json');
  const packageConfig = require(packageConfigPath);

  const versionName = packageConfig.version;
  const [major, minor, patch] = packageConfig.version.split('.').map(versionPart => parseInt(versionPart, 10));
  // Try get build number from jenkins parameter.
  const parsedBuildNumber = parseInt(process.env.BUILD_NUMBER, 10);
  const buildNumber = Number.isNaN(parsedBuildNumber)
    ? null
    : parsedBuildNumber;
  
  return {
    major,
    minor,
    patch,
    buildNumber,
    versionName,
    versionCode: major * 10000 + minor * 100 + patch,
  };
}

module.exports = {
  getApplicationVersionInfo,
};
