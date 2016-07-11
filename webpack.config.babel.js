/* eslint quote-props: 0 */
import path from 'path';

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './app/js/main.js',
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'medialibrary.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {},
  },
};
