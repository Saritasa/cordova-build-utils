import path from 'path';

/**
 * Version info initialize options.
 */
export interface VersionInfoOptions {
  /**
   * Major.
   */
  major: number;
  /**
   * Minor.
   */
  minor: number;
  /**
   * Patch.
   */
  patch: number;
  /**
   * Build number.
   */
  buildNumber: number | null;
  /**
   * Version name.
   */
  versionName: string;
}

export class VersionInfo {
  /**
   * Major.
   */
  public readonly major: number;

  /**
   * Minor.
   */
  public readonly minor: number;

  /**
   * Patch.
   */
  public readonly patch: number;

  /**
   * Build number extracted from `process.env.BUILD_NUMBER`.
   */
  public readonly buildNumber: number | null;

  /**
   * String presentation of version extracted from `version` section of package.json.
   */
  public readonly versionName: string;

  /**
   * Numeric presentation of version. Calculated as major * 10000 + minor * 100 + patch.
   * See https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#setting-the-version-code.
   */
  public readonly versionCode: number;

  /**
   * Create version info.
   * @param data Initialize options.
   */
  public constructor(data: VersionInfoOptions) {
    this.major = data.major;
    this.minor = data.minor;
    this.patch = data.patch;
    this.buildNumber = data.buildNumber;
    this.versionName = data.versionName;

    this.versionCode = this.major * 10000 + this.minor * 100 + this.patch;
  }
}

/**
 * Obtains version info from package.json and extract build number from the BUILD_NUMBER env variable.
 */
export function getApplicationVersionInfo(): VersionInfo {
  const packageConfigPath = path.resolve('package.json');
  const packageConfig = require(packageConfigPath) as NpmPackageInfo;

  if (packageConfig.version == null) {
    throw new Error(`The package.json doesn't contain version (${packageConfigPath})`);
  }

  const versionName = packageConfig.version;
  const [major, minor, patch] = packageConfig.version.split('.').map(versionPart => parseInt(versionPart, 10));
  // Try get build number from jenkins parameter.
  const parsedBuildNumber = parseInt(process.env['BUILD_NUMBER'] as string, 10);
  const buildNumber = Number.isNaN(parsedBuildNumber)
    ? null
    : parsedBuildNumber;

  return new VersionInfo({
    major,
    minor,
    patch,
    buildNumber,
    versionName,
  });
}
