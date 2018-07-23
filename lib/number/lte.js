const gt = require("./gt.js");

/**
 * Evaluate if the first value is lower than or equal to the second one.
 * @param   {Number}    n       The number to evaluate
 * @param   {Number}    val     The gap value
 * @returns {Boolean}           True if n is lower than val or equal, false otherwise
 */
function lte(n, val) 
{
    return !gt(n, val);
}

module.exports = lte;
