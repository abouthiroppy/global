'use strict';

const spawn = require('cross-spawn');

const packages = [
  'babel-cli',
  'babel-init',
  'core-validate-commit',
  'create-react-template',
  // 'electron',
  'emoj',
  // 'fixpack',
  'greenkeeper',
  'honyaku',
  'my-dish',
  'node-committer',
  // 'npm-check-updates',
  // 'npm-package-status',
  'np',
  'pageres-cli',
  'placehold-cli',
  // 'rgb-hex-cli',
  'yarn'
];

const args = [
  'install',
  '-g',
  ...packages
];

spawn.sync('npm', args, {stdio: 'inherit'});
