// import _ from 'lodash';
export const utility = {
  getArrayObjectByKeySearch,
}

 function getArrayObjectByKeySearch(_arrayObj, keys, value) {
    const data = _arrayObj.filter((item) => {
        return item[keys].toUpperCase()===(value.toUpperCase());
    });
    if (data.length > 0) {
        return data;
    } else {
        return false;
    }
}

