'use strict';

var
  test = require('tape'),
  configGit = require('./');

test("can set key and value", function(t) {
  configGit({
    location: "global"
  }).set("github.token", "yashp", function(err, data) {
    t.ok(!err, 'should not have error setting key and value');
    t.ok(data, 'as such no data');
    t.end();
  });
});

test("can get key", function(t) {
  configGit({
    location: "global"
  }).get("github.token", function(err, data) {
    t.ok(!err, 'should not have error getting key');
    t.equal(data, "yashp\n", "should be equal");
    t.end();
  });
});

test("can remove key", function(t) {
  configGit({
    location: "global"
  }).unset("github.token", function(err, data) {
    t.ok(!err, 'should not have error unseting key');
    t.ok(data, 'as such no data');
    t.end();
  });
});
