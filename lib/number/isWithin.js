const gt = require("./gt.js");
const gte = require("./gte.js");
const lte = require("./lte.js");
const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if a number is within two others.
 * @param   {Number}    n       The number to evaluate
 * @param   {Number}    val1    The first gap value
 * @param   {Number}    val2    The second gap value
 * @returns {Boolean}           True if n is within val1 & val2, false otherwise
 */
function isWithin(n, val1, val2) 
{
    if (!isNumber(n) && !isNumber(val1) && !isNumber(val2))
        return false;

    if (gt(val1, val2)) 
    {
        let copy = val1;
        val1 = val2;
        val2 = copy;
    }

    return (gte(n, val1) && lte(n, val2));
}

module.exports = isWithin;