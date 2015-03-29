#  git-first-commit [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> do first git commit


## Install

```sh
$ npm install --save git-first-commit
```


## Example

### JavaScript

```js
var gitFirstCommit = require('git-first-commit');

gitFirstCommit("intial commit", function(err, data){
  console.log(data); //=> true
})

```

### Command Line reference

```sh
$ npm install -- git-first-commit
$ git-first-commit --m "intial commit"
```


## Methods

```js
var configGit = require("git-scope-config");
configGit({
  scope: "global"
})
```

## Run Test
```sh
npm test
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].

## License

MIT © [Yashprit](yashprit.github.io)

[issue-url]: https://github.com/yashprit/git-first-commit/issues
[npm-url]: https://npmjs.org/package/git-first-commit
[npm-image]: https://badge.fury.io/js/git-first-commit.svg
[travis-url]: https://travis-ci.org/yashprit/git-first-commit
[travis-image]: https://travis-ci.org/yashprit/git-first-commit.svg?branch=master
[daviddm-url]: https://david-dm.org/yashprit/git-first-commit.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/yashprit/git-first-commit
