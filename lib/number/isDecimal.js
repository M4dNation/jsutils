const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if a number is a decimal.
 * @param   {Number}    n       The number to evaluate.
 * @returns {Boolean}           True if n is a decimal, false otherwise.
 */
function isDecimal(n) 
{
    return isNumber(n) && n % 1 !== 0;
}

module.exports = isDecimal;