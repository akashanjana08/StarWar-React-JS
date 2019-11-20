import axios from 'axios';
import { actionTypes, apiURLs } from '../constants/action-types';

 export const loginUser = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.PROCESSING_LOGIN
    });
    return axios({
      method: 'GET',
      url: apiURLs.login,
      responseType: 'json'
    })
      .then(response => {
        dispatch({
          type: actionTypes.PROCESED_LOGIN,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.ERR_PROCESSING_LOGIN
        });
      });
  };
};