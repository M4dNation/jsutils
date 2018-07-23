const isChar = require("../object/isChar.js");

/**
 * Evaluate  if a char is the space char.
 * @param   {String}    c       The char to evaluate.
 * @returns {Boolean}           True if the char is the space char, false otherwise
 */
function isSpace(c) 
{
    if (!isChar(c))
        return false;

    let charCode = c.charCodeAt(0);

    return (charCode > 8 && charCode < 14) || charCode == 32;
}

module.exports = isSpace;