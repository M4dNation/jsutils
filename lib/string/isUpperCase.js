const isString = require("../object/isString.js");

/**
 * Evaluate if a string is upper case only.
 * @param   {String}    str     The string to evaluate
 * @returns {Boolean}           True if the string is upper case only, false otherwise
 */
function isUpperCase(str) 
{
    return isString(str) && str === str.toUpperCase();
}

module.exports = isUpperCase;