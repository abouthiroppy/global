'use strict';

const spawn = require('cross-spawn');

const packages = [
  // 'babel-cli',
  // 'babel-init',
  // 'core-validate-commit',
  'create-react-template',
  // 'emoj',
  // 'greenkeeper',
  'honyaku',
  'my-dish',
  'node-core-utils',
  'np',
  'npm-check-updates',
  // 'pageres-cli',
  'placehold-cli',
  'serve',
  'tern',
  'lerna'
];

const args = [
  'install',
  '-g',
  ...packages
];

spawn.sync('npm', args, {stdio: 'inherit'});
