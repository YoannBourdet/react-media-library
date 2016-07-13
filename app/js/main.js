'use strict';
/* styles */
import '../scss/main';
/* App */
import React from 'react';
import { render } from 'react-dom';
import Medialibrary from './components/Medialibrary';

render(
  <Medialibrary />,
  document.getElementById('main')
);
