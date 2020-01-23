/**
 * Module for work with cordova build config:
 * 1. iOS: https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#using-buildjson;
 * 2. Android https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-buildjson.
 */
const path = require('path');

const RELEASE_BUILD_TYPE = 'release';
const DEBUG_BUILD_TYPE = 'debug';

/**
 * @property 
 * Read cordova build config for specific context.
 * @param {CordovaContext} context
 * @returns {object}
 */
function readConfigFromContext(context) {
  const {opts: {options: { buildConfig = 'build.json', release }, projectRoot, platforms: [platform]} = {}} = context;

  if (!platform) {
    throw new Error('You should specify platform');
  }
  
  const buildType = release
    ? RELEASE_BUILD_TYPE
    : DEBUG_BUILD_TYPE;
  
  const buildConfigPath = path.isAbsolute(buildConfig)
    ? buildConfig
    : path.join(projectRoot, buildConfig);
  
  const {[platform]: {[buildType]: config = {}} = {}} = require(buildConfigPath) || {};
  
  return config;
}

module.exports = {
  readConfigFromContext,
};
