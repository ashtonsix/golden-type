/* eslint no-var:0 */

var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: 'example/src/index',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['', 'node_modules'],
    extensions: ['', '.js'],
    alias: {
      'golden-type': path.join(__dirname, '../src'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ],
  },
};
