const et = import('elementtree');

declare class ConfigParser {
  /**
   * Create cordova config parser.
   * @param path Cordova config file path.
   */
  constructor(path: string);

  /**
   * Root xml element.
   */
  public doc: et.ElementTree;

  /**
   * Set version.
   * @param value Version.
   */
  public setVersion(value: string): void;

  /**
   * Get package name.
   */
  public packageName(): string;

  /**
   * Set package name.
   * @param value New package name.
   */
  public setPackageName(value: string): string;

  /**
   * Write changes to the config file.
   */
  public write(): void;
}

declare module 'cordova-common/src/ConfigParser/ConfigParser' {
  export = ConfigParser;
}

/**
 * Cordova hook type.
 * See https://cordova.apache.org/docs/en/latest/guide/appdev/hooks/ for details.
 */
declare type CordovaHookType = 'before_platform_add' | 'after_platform_add' | 'before_platform_rm' | 'after_platform_rm' | 'before_platform_ls' | 'after_platform_ls' | 'before_prepare' | 'after_prepare' | 'before_compile' | 'after_compile' | 'before_deploy' | 'before_build' | 'after_build' | 'before_emulate' | 'after_emulate' | 'before_run' | 'after_run' | 'before_serve' | 'after_serve' | 'before_clean' | 'after_clean' | 'before_plugin_add' | 'after_plugin_add' | 'before_plugin_rm' | 'after_plugin_rm' | 'before_plugin_ls' | 'after_plugin_ls' | 'before_plugin_install' | 'after_plugin_install' | 'before_plugin_uninstall';

/**
 * Cordova platform.
 * See https://cordova.apache.org/docs/en/latest/guide/support/index.html for details.
 */
declare type CordovaPlatform = 'android' | 'ios' | 'osx' | 'windows' | 'electron';

/**
 * Cordova context.
 * Passed as an argument to a hook function.
 */
declare interface CordovaHookContext {
  /**
   * Hook type.
   */
  hook: CordovaHookType;
  opts: HookOptions;
  cmdLine: string;
  scriptLocation: string;
}

declare interface HookOptions {
  /**
   * Target platforms.
   */
  platforms: CordovaPlatform[];
  /**
   * CLI options.
   */
  options: CordovaCliOptions;
  /**
   * Is verbose.
   */
  verbose: boolean;
  /**
   * Is silent.
   */
  silent: boolean;
  /**
   * Suppressed hooks
   */
  nohooks: string[];
  /**
   * Updates the version specified in config.xml
   */
  save: boolean;
  /**
   * Project root path.
   */
  projectRoot: string;
  /**
   * Cordova info.
   */
  cordova: ContextCordovaInfo;
}

declare interface ContextCordovaInfo {
  /**
   * Target platforms.
   */
  platforms: CordovaPlatform[];
  /**
   * Lis of plugins.
   */
  plugins: string[];
  /**
   * Cordova CLI version.
   */
  version: string;
}

declare interface CordovaCliOptions {
  /**
   * Is debug mode.
   */
  debug?: boolean;
  /**
   * Is release mode.
   */
  release?: boolean;
  /**
   * Is device target,
   */
  device?: boolean;
  /**
   * Is emulator target.
   */
  emulator?: boolean;
  /**
   * Build flags.
   * Platform specific args.
   * Android: https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags.
   * iOS: https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags.
   */
  argv: string[];
  /**
   * Build config path.
   */
  buildConfig?: string;
}

interface ExtendedCordovaBuildConfig {
  /**
   * Extra build config property to declare bundle ID for target build configuration.
   * This is not Cordova specified property, this is extra property only for current project.
   */
  bundleId?: string;
}

/**
 * Cordova build config for iOS platform.
 * See https://cordova.apache.org/docs/en/latest/guide/platforms/ios/#using-buildjson for details.
 */
declare interface CordovaIosBuildConfig extends ExtendedCordovaBuildConfig {
  codeSignIdentity: string;
  provisioningProfile: string;
  developmentTeam: string;
  packageType: 'development' | 'enterprise' | 'app-store';
  automaticProvisioning?: boolean;
  buildFlag: string[];
}

/**
 * Cordova build config for Android platform.
 * See https://cordova.apache.org/docs/en/latest/guide/platforms/android/#using-buildjson for details.
 */
declare interface CordovaAndroidBuildConfig extends ExtendedCordovaBuildConfig {
  keystore: string;
  storePassword: string;
  alias: string;
  password: string;
  keystoreType: string;
}

/**
 * Cordova build config.
 * Presents build configuration for platforms.
 */
declare interface CordovaBuildConfig {
  ios?: CordovaIosBuildConfig;
  android?: CordovaAndroidBuildConfig;
}

/**
 * Cordova build config for target mode and platform.
 */
declare type TargetCordovaBuildConfig = CordovaIosBuildConfig | CordovaAndroidBuildConfig;

/**
 * Npm package.json content.
 * Automatically generated through https://app.quicktype.io from http://json.schemastore.org/package. 
 */
declare interface NpmPackageInfo {
  author?: PersonObject | string;
  bin?:    { [key: string]: string } | string;
  /**
   * The url to your project's issue tracker and / or the email address to which issues should
   * be reported. These are helpful for people who encounter issues with your package.
   */
  bugs?: BugsObject | string;
  /**
   * A 'config' hash can be used to set configuration parameters used in package scripts that
   * persist across upgrades.
   */
  config?: { [key: string]: any };
  /**
   * A list of people who contributed to this package.
   */
  contributors?: Array<PersonObject | string>;
  /**
   * If your code only runs on certain cpu architectures, you can specify which ones.
   */
  cpu?:          string[];
  dependencies?: { [key: string]: string };
  /**
   * This helps people discover your package, as it's listed in 'npm search'.
   */
  description?:     string;
  devDependencies?: { [key: string]: string };
  directories?:     Directories;
  dist?:            Dist;
  engines?:         Engines;
  engineStrict?:    boolean;
  /**
   * A module ID with untranspiled code that is the primary entry point to your program.
   */
  esnext?: EsnextObject | string;
  /**
   * The 'files' field is an array of files to include in your project. If you name a folder
   * in the array, then it will also include the files inside that folder.
   */
  files?: string[];
  /**
   * The url to the project homepage.
   */
  homepage?: string;
  /**
   * This helps people discover your package as it's listed in 'npm search'.
   */
  keywords?: string[];
  /**
   * You should specify a license for your package so that people know how they are permitted
   * to use it, and any restrictions you're placing on it.
   */
  license?: string;
  /**
   * DEPRECATED: Instead, use SPDX expressions, like this: { "license": "ISC" } or {
   * "license": "(MIT OR Apache-2.0)" } see:
   * 'https://docs.npmjs.com/files/package.json#license'
   */
  licenses?: License[];
  /**
   * The main field is a module ID that is the primary entry point to your program.
   */
  main?: string;
  /**
   * A list of people who maintains this package.
   */
  maintainers?: Array<PersonObject | string>;
  /**
   * Specify either a single file or an array of filenames to put in place for the man program
   * to find.
   */
  man?: string[] | string;
  /**
   * An ECMAScript module ID that is the primary entry point to your program.
   */
  module?: string;
  /**
   * The name of the package.
   */
  name?:                 string;
  optionalDependencies?: { [key: string]: string };
  /**
   * You can specify which operating systems your module will run on
   */
  os?:               string[];
  peerDependencies?: { [key: string]: string };
  /**
   * DEPRECATED: This option used to trigger an npm warning, but it will no longer warn. It is
   * purely there for informational purposes. It is now recommended that you install any
   * binaries as local devDependencies wherever possible.
   */
  preferGlobal?: boolean;
  /**
   * If set to true, then npm will refuse to publish it.
   */
  private?:       boolean | PrivateEnum;
  publishConfig?: PublishConfig;
  readme?:        string;
  /**
   * Specify the place where your code lives. This is helpful for people who want to
   * contribute.
   */
  repository?:  RepositoryObject | string;
  resolutions?: { [key: string]: string };
  /**
   * The 'scripts' member is an object hash of script commands that are run at various times
   * in the lifecycle of your package. The key is the lifecycle event, and the value is the
   * command to run at that point.
   */
  scripts?: Scripts;
  /**
   * The type field defines how .js and extensionless files should be treated within a
   * particular package.json file’s package scope. Supported values: "commonjs" (default) or
   * "module".
   */
  type?: string;
  /**
   * Set the types property to point to your bundled declaration file
   */
  types?: string;
  /**
   * Note that the "typings" field is synonymous with "types", and could be used as well.
   */
  typings?: string;
  /**
   * Version must be parseable by node-semver, which is bundled with npm as a dependency.
   */
  version?: string;
  /**
   * To configure your yarn workspaces, please note private should be set to true to use yarn
   * workspaces
   */
  workspaces?:          any;
  jspm?:                CoreProperties;
  bundleDependencies?:  string[] | boolean;
  bundledDependencies?: string[] | boolean;
}

interface PersonObject {
  email?: string;
  name:   string;
  url?:   string;
}

interface BugsObject {
  /**
   * The email address to which issues should be reported.
   */
  email?: string;
  /**
   * The url to your project's issue tracker.
   */
  url?: string;
}

interface Directories {
  /**
   * If you specify a 'bin' directory, then all the files in that folder will be used as the
   * 'bin' hash.
   */
  bin?: string;
  /**
   * Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.
   */
  doc?: string;
  /**
   * Put example scripts in here. Someday, it might be exposed in some clever way.
   */
  example?: string;
  /**
   * Tell people where the bulk of your library is. Nothing special is done with the lib
   * folder in any way, but it's useful meta info.
   */
  lib?: string;
  /**
   * A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.
   */
  man?:  string;
  test?: string;
}

interface Dist {
  shasum?:  string;
  tarball?: string;
}

interface Engines {
  node?: string;
}

interface EsnextObject {
  browser?: string;
  main?:    string;
}

interface CoreProperties {
  author?: PersonObject | string;
  bin?:    { [key: string]: string } | string;
  /**
   * The url to your project's issue tracker and / or the email address to which issues should
   * be reported. These are helpful for people who encounter issues with your package.
   */
  bugs?: BugsObject | string;
  /**
   * A 'config' hash can be used to set configuration parameters used in package scripts that
   * persist across upgrades.
   */
  config?: { [key: string]: any };
  /**
   * A list of people who contributed to this package.
   */
  contributors?: Array<PersonObject | string>;
  /**
   * If your code only runs on certain cpu architectures, you can specify which ones.
   */
  cpu?:          string[];
  dependencies?: { [key: string]: string };
  /**
   * This helps people discover your package, as it's listed in 'npm search'.
   */
  description?:     string;
  devDependencies?: { [key: string]: string };
  directories?:     Directories;
  dist?:            Dist;
  engines?:         Engines;
  engineStrict?:    boolean;
  /**
   * A module ID with untranspiled code that is the primary entry point to your program.
   */
  esnext?: EsnextObject | string;
  /**
   * The 'files' field is an array of files to include in your project. If you name a folder
   * in the array, then it will also include the files inside that folder.
   */
  files?: string[];
  /**
   * The url to the project homepage.
   */
  homepage?: string;
  /**
   * This helps people discover your package as it's listed in 'npm search'.
   */
  keywords?: string[];
  /**
   * You should specify a license for your package so that people know how they are permitted
   * to use it, and any restrictions you're placing on it.
   */
  license?: string;
  /**
   * DEPRECATED: Instead, use SPDX expressions, like this: { "license": "ISC" } or {
   * "license": "(MIT OR Apache-2.0)" } see:
   * 'https://docs.npmjs.com/files/package.json#license'
   */
  licenses?: License[];
  /**
   * The main field is a module ID that is the primary entry point to your program.
   */
  main?: string;
  /**
   * A list of people who maintains this package.
   */
  maintainers?: Array<PersonObject | string>;
  /**
   * Specify either a single file or an array of filenames to put in place for the man program
   * to find.
   */
  man?: string[] | string;
  /**
   * An ECMAScript module ID that is the primary entry point to your program.
   */
  module?: string;
  /**
   * The name of the package.
   */
  name?:                 string;
  optionalDependencies?: { [key: string]: string };
  /**
   * You can specify which operating systems your module will run on
   */
  os?:               string[];
  peerDependencies?: { [key: string]: string };
  /**
   * DEPRECATED: This option used to trigger an npm warning, but it will no longer warn. It is
   * purely there for informational purposes. It is now recommended that you install any
   * binaries as local devDependencies wherever possible.
   */
  preferGlobal?: boolean;
  /**
   * If set to true, then npm will refuse to publish it.
   */
  private?:       boolean | PrivateEnum;
  publishConfig?: PublishConfig;
  readme?:        string;
  /**
   * Specify the place where your code lives. This is helpful for people who want to
   * contribute.
   */
  repository?:  RepositoryObject | string;
  resolutions?: { [key: string]: string };
  /**
   * The 'scripts' member is an object hash of script commands that are run at various times
   * in the lifecycle of your package. The key is the lifecycle event, and the value is the
   * command to run at that point.
   */
  scripts?: Scripts;
  /**
   * The type field defines how .js and extensionless files should be treated within a
   * particular package.json file’s package scope. Supported values: "commonjs" (default) or
   * "module".
   */
  type?: string;
  /**
   * Set the types property to point to your bundled declaration file
   */
  types?: string;
  /**
   * Note that the "typings" field is synonymous with "types", and could be used as well.
   */
  typings?: string;
  /**
   * Version must be parseable by node-semver, which is bundled with npm as a dependency.
   */
  version?: string;
  /**
   * To configure your yarn workspaces, please note private should be set to true to use yarn
   * workspaces
   */
  workspaces?: any;
}

interface License {
  type?: string;
  url?:  string;
}

enum PrivateEnum {
  False = "false",
  True = "true",
}

interface PublishConfig {
  access?:   Access;
  registry?: string;
  tag?:      string;
}

enum Access {
  Public = "public",
  Restricted = "restricted",
}

interface RepositoryObject {
  directory?: string;
  type?:      string;
  url?:       string;
}

/**
* The 'scripts' member is an object hash of script commands that are run at various times
* in the lifecycle of your package. The key is the lifecycle event, and the value is the
* command to run at that point.
*/
interface Scripts {
  install?:     string;
  postinstall?: string;
  /**
   * Run AFTER the tarball has been generated and moved to its final destination.
   */
  postpack?:    string;
  postpublish?: string;
  postrestart?: string;
  poststart?:   string;
  poststop?:    string;
  posttest?:    string;
  /**
   * Run AFTER the package is uninstalled
   */
  postuninstall?: string;
  /**
   * Run AFTER bump the package version
   */
  postversion?: string;
  /**
   * Run BEFORE the package is installed
   */
  preinstall?: string;
  /**
   * run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git
   * dependencies)
   */
  prepack?: string;
  /**
   * Run both BEFORE the package is packed and published, and on local npm install without any
   * arguments. This is run AFTER prepublish, but BEFORE prepublishOnly
   */
  prepare?: string;
  /**
   * Run BEFORE the package is published (Also run on local npm install without any arguments)
   */
  prepublish?: string;
  /**
   * Run BEFORE the package is prepared and packed, ONLY on npm publish
   */
  prepublishOnly?: string;
  prerestart?:     string;
  prestart?:       string;
  prestop?:        string;
  pretest?:        string;
  preuninstall?:   string;
  preversion?:     string;
  publish?:        string;
  restart?:        string;
  start?:          string;
  stop?:           string;
  test?:           string;
  uninstall?:      string;
  version?:        string;
}
