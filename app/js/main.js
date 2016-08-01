'use strict';

/* Styles */
import '../scss/main';

/* React */
import React from 'react';
import { render } from 'react-dom';

/* Redux */
import { Provider } from 'react-redux';
import store from '../store';

/* Main component */
import Medialibrary from './components/Medialibrary';

render(
  <Provider store={store}>
    <Medialibrary />
  </Provider>,
  document.getElementById('main')
);
