#!/usr/bin/env node

'use strict';

const spawn = require('cross-spawn');

const args = [
  'list',
  '-g',
  '--depth=0'
];

spawn('npm', args, {stdio: 'inherit'});
