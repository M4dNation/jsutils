const isTimes = require("./isTimes.js");

/**
 * Evaluate if the first value is 2 times the second one.
 * @param   {Number}    n       The number to evaluate
 * @param   {Number}    val     The value to compare
 * @returns {Boolean}           True if n is 2 times val, false otherwise
 */
function isDouble(n, val) 
{
    return isTimes(n, val, 2);
}

module.exports = isDouble;