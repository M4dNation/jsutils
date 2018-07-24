const isNumber = require("../object/isNumber");

/**
 * Evaluate if a number is odd.
 * @param   {Number}    n       The number to evaluate.
 * @returns {Boolean}           True if n is odd, false otherwise.
 */
function isOdd(n) 
{
    return isNumber(n) && (n % 2 === 1 || n % 2 === -1);
}

module.exports = isOdd;