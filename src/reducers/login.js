import _ from 'lodash';

export default (paramState, payload) => {
  const state = paramState || {};
  switch (payload.type) {
    case 'PROCESSING_LOGIN':
        return _.assign({}, state, {
            loging: true,
            peopleRes: [],
            errorLogin: false,
            logged: false
          });
    case 'PROCESED_LOGIN':
        return _.assign({}, state, {
            loging: false,
            peopleRes: payload.payload.results,
            errorLogin: false,
            logged: true
          });
    case 'ERR_PROCESSING_LOGIN':
        return _.assign({}, state, {
            loging: false,
            peopleRes: [],
            errorLogin: true,
            logged: false
          });
    default:
      return state;
  }
};
