const isString = require("../object/isString.js");

/**
 * Evaluate ifa string starts with a substring.
 * @param   {String}    str         The string to evaluate
 * @param   {String}    substr      The substring to look for
 * @returns  {Boolean}              True if the string starts with the substring, false otherwise
 */
function startWith(str, substr) 
{
    if (!isString(str) || !isString(substr))
        return false;

    return str.indexOf(substr) === 0;
}

module.exports = startWith;