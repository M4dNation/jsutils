const isFalsy = require("./isFalsy.js");

/**
* Evaluate if an object is a truthy value or not.
* @param    {Object}    obj     The object to evaluate
* @returns  {Boolean}           True if the object is truthy, false otherwise
*/
function isTruthy(obj)
{
    return !isFalsy(obj);
}

module.exports = isTruthy;