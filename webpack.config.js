/* eslint quote-props: 0 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './js/main.js',
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'medialibrary.js',
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {},
  },
};
