/**
* The module provide ability to work with Cordova config.xml file.
*/
import path from 'path';
import fs from 'fs';
import ConfigParser from 'cordova-common/src/ConfigParser/ConfigParser';

/**
* Read cordova config file and return it as ConfigParser object.
* @param configPath Cordova config file path.
* If not specified then will be resolved by `config.xml` name.
*/
export function readConfig(configPath?: string): ConfigParser {
  if (configPath == null) {
    configPath = path.resolve('config.xml');
  }
  
  if (!fs.existsSync(configPath)) {
    throw new Error(`Could not find cordova config file: ${configPath}`);
  }

  return new ConfigParser(configPath);
}
