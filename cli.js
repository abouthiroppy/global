#!/usr/bin/env node

'use strict';

const spawn = require('cross-spawn');

const commands = process.argv.slice(2);

if (commands.length === 0) {
  console.log('Usage: global <list | install>');
  process.exit(0);
}

if (commands[0] === 'list') {
  const args = [
    'list',
    '-g',
    '--depth=0'
  ];

  spawn('npm', args, {stdio: 'inherit'});
} 

if (commands[0] === 'install') {
  const args = [
    'run',
    'setup'
  ];

  spawn('npm', args, {stdio: 'inherit'});
} 
