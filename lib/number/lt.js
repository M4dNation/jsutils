const gte = require("./gte.js");

/**
 * Evaluate if the first value is lower than the second one.
 * @param   {Number}    n       The number to evaluate
 * @param   {Number}    val     The gap valu
 * @returns {Boolean}           True if n is lower than val, false otherwise
 */
function lt(n, val) 
{
    return !gte(n, val);
}

module.exports = lt;