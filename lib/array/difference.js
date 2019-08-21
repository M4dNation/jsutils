const filter = require("../collection/filter");
const contains = require("../collection/contains");
const unique = require("./unique");

/**
 * Get the elements that are not in the second arguments.
 * @param   {Array}     arr     The array to evaluate
 * @returns {Array}             An array of all needed elements
 */
function difference(arr, ...args) {
  const rest = [].concat(...args);

  return filter(unique(arr), v => !contains(rest, v));
}

module.exports = difference;
