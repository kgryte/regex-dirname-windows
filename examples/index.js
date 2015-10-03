'use strict';

var re = require( './../lib' );

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
