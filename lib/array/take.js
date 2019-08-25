/**
 * Get the first n elements of an array.
 * @param   {Array}     arr     The array to evaluate
 * @param   {Number}    n       The number of elements to get
 * @returns {Array}             An array of all needed elements
 */
function take(arr, n) {
  return n ? Array.prototype.slice.call(arr, 0, n) : arr[0];
}

module.exports = take;
