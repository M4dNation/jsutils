const isString = require("../object/isString.js");

/**
 * Evaluate a string ends with a substring.
 * @param   {String}    str         The string to evaluate
 * @param   {String}    substr      The substring to look for
 * @returns {Boolean}               True if the string ends with the substring, false otherwise
 */
function endWith(str, substr) 
{
    if (!isString(str) || !isString(substr))
        return false;

    substr += '';
    var position = str.length - substr.length;

    return position >= 0 && str.indexOf(substr, position) === position;
}

module.exports = endWith;