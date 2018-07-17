const isNumber = require("./isNumber.js");

/**
* Evaluate if an object is NaN or not.
* @param    {Object}    obj     The object to evaluate
* @returns  {Boolean}           True if the object is NaN, false otherwise
*/
function isNaN(obj)
{
    return isNumber(obj) && obj !== obj;
}

module.exports = isNaN;