/* eslint-disable indent */
const captlizeAndFilter = (arr) => {
    const arr2 = [];





    for(const string of arr) {

        if (string[0] != 'f' && string[0] != 'F') {

            arr2.push(string.toUpperCase());
        }
    }
    return arr2;
};

export default captlizeAndFilter;
