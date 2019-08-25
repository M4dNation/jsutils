const unique = require("./unique");

/**
 * Transform two arrays into one.
 * @returns {Array} The new array
 */
function union(...args) {
  return unique([].concat(...args));
}

module.exports = union;
