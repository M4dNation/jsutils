const isNaN = require("../object/isNaN.js");
const isNumber = require("../object/isNumber.js");
const isInfinite = require("../object/isInfinite.js");

/**
 * Evaluate if a number is finite.
 * @param   {Number}    n       The number to evaluate
 * @returns {Boolean}           True if n is finite, false otherwise
 */
function isFinite(n) 
{
    return isNumber(n) && !isInfinite(n) && !isNaN(n);
}

module.exports = isFinite;