//This file isn't transpiled, so must use CommonJS and ES5

//register babel to transpile before the test runs
//require ('babel-register')();

//Disable webpack features that Mocha doesn't understand.
require.extensions['.css']= function(){};