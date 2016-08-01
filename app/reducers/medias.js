'use strict';

import { FETCH_MEDIAS } from '../actions/medias';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MEDIAS:
      return action.medias;
    default:
      return state;
  }
};
