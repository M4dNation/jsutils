const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if a number is the number 1.
 * @param   {Number}    n       The number to evaluate
 * @returns {Boolean}           True if n is 1, false otherwise
 */
function isOne(n) 
{
    if (isNumber(n) && n === 1)
        return true;

    return false;
}

module.exports = isOne;