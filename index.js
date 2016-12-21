'use strict';

const spawn = require('cross-spawn');

const packages = [
  'babel-cli',
  'electron',
  'emoj',
  'fixpack',
  'greenkeeper',
  'honyaku',
  'my-dish',
  'npm-check-updates',
  'np',
  'placehold-cli',
  'rgb-hex-cli',
  'yarn'
];

const args = [
  'install',
  '-g',
  ...packages
];

spawn.sync('npm', args, {stdio: 'inherit'});
