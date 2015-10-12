/* eslint no-var:0 */

var path = require('path');
var webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;

module.exports = {
  devtool: DEVELOPMENT ? 'source-map' : 'eval',
  entry: DEVELOPMENT ?
    [
      'webpack-hot-middleware/client',
      './example/index',
    ] :
    [
      './src/index',
    ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: DEVELOPMENT ?
    [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ] :
    [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
    ],
  resolve: {
    modulesDirectories: ['', 'node_modules'],
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
};
