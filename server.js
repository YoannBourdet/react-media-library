'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js');
const globalConfig = require('./config/index');

const isDeveloping = process.env.NODE_ENV !== 'production';

const app = express();

app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({
  doctype: '<!DOCTYPE html>',
}));

let compiler;
let middleware;

if(isDeveloping) {
  compiler = webpack(webpackConfig);
  middleware = webpackMiddleware(compiler, {
    publicPath: '/',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });
}

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.render('index', {});
});

/* eslint no-console: 0  */
app.listen(globalConfig.port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('App start, Open up http://localhost:%s/ in your browser.', globalConfig.port);
});
