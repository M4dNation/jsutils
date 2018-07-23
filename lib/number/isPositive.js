const gte = require("./gte.js");
const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if a number is positive.
 * @param   {Number}    n       The number to evaluate
 * @returns {Boolean}           True if n is >= 0, false otherwise
 */
function isPositive(n) 
{
    if (isNumber(n) && gte(n, 0))
        return true;

    return false;
}

module.exports = isPositive;