const isString = require("../object/isString.js");

const ascii = /^[\x00-\x7F]+$/;

/**
 * Evaluate if a string is an ASCII string.
 * @param   {String}    str     The string to evaluate
 * @returns {Boolean}           True if the string is an ASCII string, false otherwise
 */
function isAscii(str) 
{
    if (!isString(str))
        return false;

    return ascii.test(str);
}

module.exports = isAscii;