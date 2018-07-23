const isString = require("../object/isString.js");

/**
 * Evaluate if a string is lower case only.
 * @param   {String}    str     The string to evaluate
 * @returns {Boolean}           True if the string is lower case only, false otherwise
 */
function isLowerCase(str) 
{
    return isString(str) && str === str.toLowerCase();
}

module.exports = isLowerCase;