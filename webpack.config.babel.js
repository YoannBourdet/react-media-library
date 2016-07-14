/* eslint quote-props: 0 */
import path from 'path';

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
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
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      bootstrap: '~bootstrap-sass/assets/stylesheets/bootstrap',
    },
  },
};
