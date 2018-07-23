const lte = require("./lte.js");
const isNumber = require("../object/isNumber.js");

/**
 * Evalute if a number is negative.
 * @param   {Number}    n        The number to evaluate.
 * @returns {Boolean}   True if n is <= 0, false otherwise.
 */
function isNegative(n) 
{
    if (isNumber(n) && lte(n, 0))
        return true;

    return false;
}

module.exports = isNegative;