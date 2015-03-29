'use strict';

var exec = require("child_process").exec;

module.exports = gitCommit;

function gitCommit(message, cb) {
  var command = 'git commit -a -m "' + message + '"';
  var intialPush = 'git push origin -u master'
  exec(command, function(err) {
    if (err) {
      cb(err);
      return;
    }

    exec(intialPush, function(err, status) {
      if (err) {
        cb(err)
        return;
      }
      cb(null, true);
    });
  });
}
