'use strict';

import Promise from 'bluebird';
import { get } from 'jsonpointer';
import api from '../fake/api';

const medias = get(api, '/medias');

export const FETCH_MEDIAS = 'FETCH_MEDIAS';

export const fetchAsync = () => (dispatch) =>
  Promise.resolve(api).then(({ medias }) => {
    dispatch({ type: FETCH_MEDIAS, medias });
    return { medias };
  });

export const fetch = () => ({ type: FETCH_MEDIAS, medias });
