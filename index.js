'use strict';

var exec = require("shelljs").exec;

module.exports = gitCommit;

function gitCommit(message, cb) {
  var command = 'git add -A && git commit -m "' + message + '"';

  let { stdout, stderr, code } = exec(command, { silent: true });
  //console.log(stdout, stderr, code )
  if(stderr) {
    cb(err);
    return;
  } else {
    var intialPush = 'git push origin -u master';
    let { stdout, stderr, code } = exec(command, { silent: true });
    console.log(stdout, stderr, code )
    if (stderr) {
      cb(err)
      return;
    } else {
      cb(null, true);
    }
  }
}
