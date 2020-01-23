/**
* The module provide ability to work with Cordova config.xml file.
*/
const path = require('path');
const fs = require('fs');
const cordovaLib = require('cordova-lib');

/**
* Read cordova config file and return it as ConfigParser object.
* @param {string|undefined} [configPath] Cordova config file path.
* If not specified then will be resolved by `config.xml` name.
* @returns {ConfigParser} https://github.com/apache/cordova-common/blob/master/src/ConfigParser/ConfigParser.js
*/
function readConfig(configPath = undefined) {
  if (configPath == null) {
    configPath = path.resolve('config.xml');
  }
  
  if (!fs.existsSync(configPath)) {
    throw new Error(`Could not find cordova config file: ${configPath}`);
  }
  const ConfigParser = cordovaLib.configparser;
  return new ConfigParser(configPath);
}

module.exports = {
  readConfig,
};
