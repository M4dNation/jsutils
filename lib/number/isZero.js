const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if the number is the number 0.
 * @param   {Number}    n       The number to evaluate
 * @returns {Boolean}           True if n is 0, false otherwise
 */
function isZero(n) 
{
    if (isNumber(n) && n === 0)
        return true;

    return false;
}

module.exports = isZero;