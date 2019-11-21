// import _ from 'lodash';
export const utility = {
    getObjectByKeySearch,
    getArrayObjectByMultipleKeySearch
}

 function getObjectByKeySearch(_arrayObj, keys, value) {
    const data = _arrayObj.filter((item) => {
        return item[keys].toUpperCase()===(value.toUpperCase());
    });
    if (data.length > 0) {
        return data;
    } else {
        return false;
    }
}

function getArrayObjectByMultipleKeySearch(_arrayObj, keys, value) {
    const data = _arrayObj.filter((item) => {
        return item[keys].toUpperCase().includes(value.toUpperCase());
    });
    if (data.length > 0) {
        return data;
    } else {
        return false;
    }
}