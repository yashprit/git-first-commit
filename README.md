*work is still in progress*

#  git-scope-config [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> read or set git config from various location like global, system, file, local


## Install

```sh
$ npm install --save git-scope-config
```


## Example

### JavaScript

```js
var configGit = require('git-scope-config');

configGit({scope: "global"}).set("github.user", "Yashprit Singh", function(err, data){
  console.log(data); //=> true
})

```

### Command Line reference 

```sh
$ npm install --g git-scope-config
$ git-scope-config --scope global --key github.user --value Yashprit Singh
```


## Methods

```js
var configGit = require("git-scope-config");
configGit({
  scope: "global"
})
```

### set([key], [value], cb)

Set value for key in defined scope, created by above constructor. e.g. `git config --global github.user Yashprit Singh` 

### get([key], cb)

Get value for key, for above scope. If no key specified than get all key, similar to `--get-all`

### unset([key], cb)

Unset value for given key, if no key specified than unset-all, using `--unset-all`

## Run Test
```sh
npm test
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].

## License

MIT © [Yashprit](yashprit.github.io)

[issue-url]: https://github.com/yashprit/config-git/issues
[npm-url]: https://npmjs.org/package/config-git
[npm-image]: https://badge.fury.io/js/config-git.svg
[travis-url]: https://travis-ci.org/yashprit/config-git
[travis-image]: https://travis-ci.org/yashprit/config-git.svg?branch=master
[daviddm-url]: https://david-dm.org/yashprit/config-git.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/yashprit/config-git
