/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var assert = chai.assert;


// TESTS //

describe( 'regex-dirname-windows', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should capture Windows path dirnames', function test() {
		var expected,
			values,
			dir,
			i;

		values = [
			'index.js',
			'C:\\foo\\bar\\home.html',
			'\\foo\\bar\\',
			'foo\\file.pdf',
			'foo\\file',
			'index.js\\',
			'foo\\bar\\home.html\\',
			'foo\\..\\..\\bar\\home.html',
			'.gitigno.re',
			'C:\\foo\\bar\\.editorconf.ig',
			'main\\.travis.yml',
			'boop.'
		];

		expected = [
			'',
			'C:\\foo\\bar',
			'\\foo',
			'foo',
			'foo',
			'',
			'foo\\bar',
			'foo\\..\\..\\bar',
			'',
			'C:\\foo\\bar',
			'main',
			''
		];

		for ( i = 0; i < values.length; i++ ) {
			dir = re.exec( values[ i ] )[ 1 ];
			assert.strictEqual( dir, expected[ i ], values[ i ] );
		}
	});

});
