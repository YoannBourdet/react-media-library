'use strict';

import Promise from 'bluebird';
import data from '../fake/api';

export const FETCH_MEDIAS = 'FETCH_MEDIAS';

export const fetch = () => (dispatch) => {
  Promise.resolve(data).then((medias) =>
    dispatch({ type: FETCH_MEDIAS, medias })
  );
};
