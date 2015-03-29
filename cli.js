#!/usr/bin/env node

'use strict';

var
  args = require('minimist')(process.argv.slice(2)),
  gitFirstCommit = require('./');

var message = args.m;

gitFirstCommit(message, function(err, status) {
  console.log(err, status);
})
