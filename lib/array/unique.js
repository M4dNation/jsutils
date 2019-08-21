const map = require("../collection/map");
const filter = require("../collection/filter");
const isFunction = require("../object/isFunction");
const indexOf = require("./index-of");

/**
 * Get a copy of the unique elements as an array.
 * @param   {Array}     arr         The array to process on
 * @param   {Function}  fn          The function to apply
 * @param   {Object}    scope       The context to bound to
 * @returns {Array}     The new array
 */
function unique(arr, fn, scope) {
  var seen = [];
  return filter(isFunction(fn) ? map(arr, fn, scope) : arr, function(v) {
    if (indexOf(seen, v, true) === -1) {
      seen[seen.length] = v;
      return true;
    }
  });
}

module.exports = unique;
