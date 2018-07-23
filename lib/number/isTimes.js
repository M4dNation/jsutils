const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if the first value is t times the second one.
 * @param   {Number}    n       The number to evaluate
 * @param   {Number}    val     The value to compare
 * @param   {Number}    t       The number of times
 * @returns {Boolean}           True if n is t times val, false otherwise
 */
function isTimes(n, val, t) 
{
    if (isNumber(n) && isNumber(val) && isNumber(t)) 
    {
        if (n === val * t)
            return true;
    }

    return false;
}

module.exports = isTimes;