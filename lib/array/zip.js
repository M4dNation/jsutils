const fetch = require("../object/fetch");

/**
 * Merge the element of multiple array into one.
 * @param   {Array}     arr     A list of array arguments
 * @returns {Array}             The new array
 */
function zip(arr, ...rest) {
  const ret = [];
  for (let i = 0; i < arr.length; i++) {
    const array = [arr[i]];
    ret[i] = array.concat(fetch(rest, String(i)));
  }

  return ret;
}

module.exports = zip;
