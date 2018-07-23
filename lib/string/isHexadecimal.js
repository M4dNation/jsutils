const isString = require("../object/isString.js");

const hexadecimal = /^[0-9A-F]+$/i;

/**
 * Evaluate if a string is an hexadecimal string.
 * @param   {String}    str     The string to evaluate
 * @returns {Boolean}           True if the string is an hexadecimal string, false otherwise
 */
function isHexadecimal(str) 
{
    if (!isString(str))
        return false;

    return hexadecimal.test(str);
}

module.exports = isHexadecimal;