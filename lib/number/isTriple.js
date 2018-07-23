const isTimes = require("./isTimes.js");

/**
 * Evaluate if the first value is 3 times the second one.
 * @param   {Number}    n       The number to evaluate
 * @param   {Number}    val     The value to compare
 * @returns {Boolean}           True if n is 3 times val, false otherwise
 */
function isTriple(n, val) 
{
    return isTimes(n, val, 3);
}

module.exports = isTriple;
