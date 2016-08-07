'use strict';

import { bindActionCreators } from 'redux';
import { connect as reduxConnect } from 'react-redux';

import * as mediasAction from '../actions/medias.js';

export const mapStateToProps = (state) => state;

export const mapDispatchToProps = (dispatch) => ({
  actions: {
    medias: bindActionCreators(mediasAction, dispatch),
  },
});

export const connect = () => reduxConnect(mapStateToProps, mapDispatchToProps);

export * from './array';
