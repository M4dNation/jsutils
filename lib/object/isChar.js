const isString = require("./isString.js");

/**
* This function is used in order to know if an object is a string.
* @param    {Object}   obj      The object to evaluate
* @returns  {Boolean}           True if the object is a string, false otherwise
*/
function isChar(obj)
{
    return isString(obj) && obj.length === 1;
}

module.exports = isChar;