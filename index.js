'use strict';

const spawn = require('cross-spawn');

const packages = [
  'babel-cli',
  'babel-init',
  'core-validate-commit',
  'create-react-template',
  'emoj',
  'greenkeeper',
  'honyaku',
  'my-dish',
  'node-committer',
  'np',
  'pageres-cli',
  'placehold-cli',
  'tern'
];

const args = [
  'install',
  '-g',
  ...packages
];

spawn.sync('npm', args, {stdio: 'inherit'});
