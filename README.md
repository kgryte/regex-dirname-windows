dirname
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture a Windows path [dirname](https://en.wikipedia.org/wiki/Dirname).


## Installation

``` bash
$ npm install regex-dirname-windows
```


## Usage

``` javascript
var re = require( 'regex-dirname-windows' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture a Windows path [dirname](https://en.wikipedia.org/wiki/Dirname). 

``` javascript
var base = re.exec( 'foo\\bar\\index.js' )[ 1 ];
// returns 'foo\\bar'
```


## Examples

``` javascript
var re = require( 'regex-dirname-windows' );

var dir;

dir = re.exec( 'index.js' )[ 1 ];
console.log( dir );
// returns ''

dir = re.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
console.log( dir );
// returns 'C:\\foo\\bar'

dir = re.exec( 'foo\\file.pdf' )[ 1 ];
console.log( dir );
// returns 'foo'

dir = re.exec( 'beep\\boop.' )[ 1 ];
console.log( dir );
// returns 'beep'

dir = re.exec( '' )[ 1 ];
console.log( dir );
// returns ''

dir = re.exec( '\\foo\\bar\\file' )[ 1 ];
console.log( dir );
// returns '\\foo\\bar'

dir = re.exec( 'C:\\foo\\bar\\.gitignore' )[ 1 ];
console.log( dir );
// returns 'C:\\foo\\bar'
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-dirname-windows.svg
[npm-url]: https://npmjs.org/package/regex-dirname-windows

[travis-image]: http://img.shields.io/travis/kgryte/regex-dirname-windows/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-dirname-windows

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-dirname-windows/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-dirname-windows?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-dirname-windows.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-dirname-windows

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-dirname-windows.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-dirname-windows

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-dirname-windows.svg
[github-issues-url]: https://github.com/kgryte/regex-dirname-windows/issues
