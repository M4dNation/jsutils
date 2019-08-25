const isBool = require("../object/isBool");
const isEqual = require("../object/isEqual");
const isNumber = require("../object/isNumber");

/**
 * LastIndexOf
 * This function is used in order to get the last index at which value occurs.
 * @param   {Array}     arr         The array to evaluate
 * @param   {Number}    value       The value to look for
 * @param   {Number}    from        The starting index
 * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects
 * @returns {Number}                The index of the element if found, -1 otherwise
 */
function lastIndexOf(arr, value, from, deep) {
  if (arr === null) {
    return -1;
  }

  const goDeep = deep || isBool(from) ? from : false;
  let start = isNumber(from) ? from : arr.length;

  if (arr.lastIndexOf && !goDeep) {
    return arr.lastIndexOf(value, start);
  }

  while (--start) {
    if (goDeep && isEqual(arr[start], value)) {
      return start;
    }

    if (arr[start] === value) {
      return start;
    }
  }

  return -1;
}

module.exports = lastIndexOf;
