const isString = require("../object/isString.js");

const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;

/**
 * Evaluate if a string is a numeric string.
 * @param   {String}    str     The string to evaluate
 * @returns {Boolean}           True if the string is a numeric string, false otherwise
 */
function isNumeric(str) 
{
    if (!isString(str))
        return false;

    return numeric.test(str);
}

module.exports = isNumeric;