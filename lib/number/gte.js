const gt = require("./gt.js");
const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if the first value is greater than or equal to the second one.
 * @param   {Number}    n       The number to evaluate
 * @param   {Number}    val     The gap value
 * @returns {Boolean}           True if n is greater than val or equal, false otherwise
 */
function gte(n, val) 
{
    if (isNumber(n) && isNumber(val)) 
    {
        if (gt(n,val) || n === val)
            return true;
    }

    return false;
}

module.exports = gte;