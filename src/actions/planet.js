import axios from 'axios';
import { actionTypes, apiURLs } from '../constants/action-types';

 export const loginUser = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCHING_PLANET
    });
    return axios({
      method: 'GET',
      url: apiURLs.planet,
      responseType: 'json'
    })
      .then(response => {
        dispatch({
          type: actionTypes.FETCHED_PLANET,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.ERR_FETCHING_PLANET
        });
      });
  };
};