const isNumber = require("../object/isNumber.js");

/**
 * Evaluate a number is an integer.
 * @param   {Number}    n       The number to evaluate
 * @returns {Boolean}           True if n is an integer, false otherwise
 */
function isInteger(n) 
{
    return isNumber(n) && n % 1 === 0;
}

module.exports = isInteger;