const indexOf = require("./index-of");

/**
 * Remove all instances of value from the array.
 * @param   {Array}     arr         The array to evaluate
 * @param   {Number}    value       The index or array of index of the values
 * @returns {Array}                 An array of all needed elements
 */
function remove(arr, value) {
  if (Array.isArray(arr)) {
    let key;
    let i = arr.length;
    while (i--) {
      if ((key = indexOf(arr, value, true)) !== -1) {
        arr.splice(key, 1);
      }
    }
  }

  return arr;
}

module.exports = remove;
