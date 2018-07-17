const isNull = require("./isNull.js");
const isUndefined = require("./isUndefined.js");

/**
* Evaluate if an object is not null or undefined.
* @param    {Object}    obj     The object to evaluate
* @returns  {Boolean}           True if the object is existy, false otherwise
*/
function isExisty(obj) 
{
    return (!isNull(obj) && !isUndefined(obj));
}

module.exports = isExisty;