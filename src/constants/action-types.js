
const apiDomain = 'https://swapi.co/api';

export const actionTypes = {
  PROCESSING_LOGIN: 'PROCESSING_LOGIN',
  PROCESED_LOGIN: 'PROCESED_LOGIN',
  ERR_PROCESSING_LOGIN: 'ERR_PROCESSING_LOGIN',
  FETCHING_PLANET: 'FETCHING_PLANET',
  FETCHED_PLANET: 'FETCHED_PLANET',
  ERR_FETCHING_PLANET: 'ERR_FETCHING_PLANET',

};

export const apiURLs = {
  login: `${apiDomain}/people`,
  planet: `${apiDomain}/planets`,
};
