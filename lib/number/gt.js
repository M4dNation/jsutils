const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if the first value is greater than the second one.
 * @param   {Number}    n       The number to evaluate
 * @param   {Number}    val     The gap value
 * @returns {Boolean}           True if n is greater than val, false otherwise
 */
function gt(n, val) 
{
    if (isNumber(n) && isNumber(val)) 
    {
        if (n > val)
            return true;
    }

    return false;
}

module.exports = gt;