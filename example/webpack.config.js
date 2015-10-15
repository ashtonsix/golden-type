/* eslint no-var:0 */

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
