const all = require("../collection/all");
const filter = require("../collection/filter");
const unique = require("./unique");
const indexOf = require("./index-of");

/**
 * Get the elements that are in the second arguments.
 * @param   {Array}     arr     The array to evaluate
 * @returns {Array}             An array of all needed elements
 */
function intersection(arr, ...arrs) {
  return filter(unique(arr), v => {
    return all(arrs, alt => indexOf(alt, v, true) !== -1);
  });
}

module.exports = intersection;
