'use strict';

const spawn = require('cross-spawn');

const packages = [
  'babel-cli',
  'babel-init',
  'core-validate-commit',
  'electron',
  'emoj',
  'fixpack',
  'greenkeeper',
  'honyaku',
  'my-dish',
  'npm-check-updates',
  'npm-package-status',
  'np',
  'pageres-cli',
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
