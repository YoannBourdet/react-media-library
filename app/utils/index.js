'use strict';

import { bindActionCreators } from 'redux';
import { connect as reduxConnect } from 'react-redux';
import jsonpointer from 'jsonpointer';

import locales from '../locales';

import * as mediasAction from '../actions/medias.js';

export const mapStateToProps = (state) => state;

export const mapDispatchToProps = (dispatch) => ({
  actions: {
    medias: bindActionCreators(mediasAction, dispatch),
  },
});

export const connect = () => reduxConnect(mapStateToProps, mapDispatchToProps);

export const localize = (path) => jsonpointer.get(locales, path);

export * from './array';
