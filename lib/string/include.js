const isString = require("../object/isString.js");

/**
 * Evaluate if a string include a substring.
 * @param   {String}    str         The string to evaluate.
 * @param   {String}    substr      The substring to look for.
 * @returns {Boolean}               True if the string includes the substring, false otherwise.
 */
function include(str, substr) 
{
    if (!isString(str) || !isString(substr))
        return false;

    return str.indexOf(substr) > -1;
}

module.exports = include;