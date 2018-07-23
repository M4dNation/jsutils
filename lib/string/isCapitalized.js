const isString = require("../object/isString.js");

/**
 * Evaluate if a string is capitalized.
 * @param   {String}    str     The string to evaluate
 * @returns {Boolean}           True if the string is capitalized, false otherwise
 */
function isCapitalized(str) 
{
    if (!isString(str))
        return false;

    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) 
    {
        let word = words[i];
        if (word.length) 
        {
            let chr = word.charAt(0);
            if (chr !== chr.toUpperCase())
                return false;
        }
    }

    return true;
}

module.exports = isCapitalized;