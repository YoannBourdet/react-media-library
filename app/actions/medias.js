'use strict';

import Promise from 'bluebird';
import api from '../fake/api';

export const FETCH_MEDIAS = 'FETCH_MEDIAS';

export const fetch = () => (dispatch) =>
  Promise.resolve(api).then(({ medias }) => {
    dispatch({ type: FETCH_MEDIAS, medias });
    return { medias };
  });
