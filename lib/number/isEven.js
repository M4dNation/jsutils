const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if a number is even.
 * @param   {Number}    n       The number to evaluate.
 * @returns {Boolean}           True if n is even, false otherwise.
 */
function isEven(n) 
{
    return isNumber(n) && (n !== 1 || n !== -1) && n % 2 === 0;
}

module.exports = isEven;