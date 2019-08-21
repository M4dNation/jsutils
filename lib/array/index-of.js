const isBool = require("../object/isBool");
const isNumber = require("../object/isNumber");
const isEqual = require("../object/isEqual");

/**
 * Get the first index at which value occurs.
 * @param   {Array}     arr         The array to evaluate
 * @param   {Number}    value       The value to look for
 * @param   {Number}    from        The starting index
 * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
 * @returns {Number}                The index of the element if found, -1 otherwise
 */
function indexOf(arr, value, from, deep) {
  if (arr === null) {
    return -1;
  }

  const goDeep = deep || isBool(from) ? from : false;
  const start = isNumber(from) ? from : 0;

  if (arr.indexOf && !goDeep) {
    return arr.indexOf(value, start);
  }

  for (let i = 0; i < arr.length; i++) {
    if (goDeep && isEqual(arr[i], value) && i >= start) {
      return i;
    }

    if (arr[i] === value && i >= start) {
      return i;
    }
  }

  return -1;
}

module.exports = indexOf;
