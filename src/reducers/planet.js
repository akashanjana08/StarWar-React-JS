import _ from 'lodash';

export default (paramState, payload) => {
  const state = paramState || {};
  switch (payload.type) {
    case 'FETCHING_PLANET':
        return _.assign({}, state, {
            fetchingPlanet: true,
            planetData: [],
            errorFetchingPlanet: false,
            fetchedPlanet: false
          });
    case 'FETCHED_PLANET':
        return _.assign({}, state, {
            fetchingPlanet: false,
            planetData: payload.payload,
            errorFetchingPlanet: false,
            fetchedPlanet: true
          });
    case 'ERR_FETCHING_PLANET':
        return _.assign({}, state, {
            fetchingPlanet: false,
            planetData: [],
            errorFetchingPlanet: true,
            fetchedPlanet: false
          });
    default:
      return state;
  }
};
