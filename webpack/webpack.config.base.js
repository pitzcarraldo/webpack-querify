'use strict';
var $q = function(){};

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'querify',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  }
};
