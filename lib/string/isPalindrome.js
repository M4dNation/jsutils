const isString = require("../object/isString.js");

/**
 * Evaluate if a string is a palindrome.
 * @param   {String}    str     The string to evaluate
 * @returns {Boolean}           True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) 
{
    if (!isString(str))
        return false;

    str = str.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    var length = str.length - 1;

    for (var i = 0, half = Math.floor(length / 2); i <= half; i++) 
    {
        if (str.charAt(i) !== str.charAt(length - i))
            return false;
    }

    return true;
}

module.exports = isPalindrome;