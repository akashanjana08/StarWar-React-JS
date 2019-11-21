import { CommonConstant } from '../constants';

export const token = {
    setToken,
    getToken,
    removeToken
}

function setToken(_data) {
    return localStorage.setItem(CommonConstant.USERNAME, _data);
}


function getToken() {
    return localStorage.getItem(CommonConstant.USERNAME);
}

function removeToken() {
    return localStorage.removeItem(CommonConstant.USERNAME);
}
