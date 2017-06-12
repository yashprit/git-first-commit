'use strict';

var exec = require("shelljs").exec;

module.exports = gitCommit;

function gitCommit(message, cb) {
  var command = `git add -A && git commit -q -m "${message}"`;

  var { stdout, stderr, code } = exec(command, { silent: true });

  if(!stderr) {
    var command = 'git push origin -q -u master';
    var { stdout, stderr, code } = exec(command, { silent: true });
    if(!stderr) {
      cb(null, true);
    } else {
      cb(stderr, null)
    }
  } else {
    cb(stderr, null)
  }
}
