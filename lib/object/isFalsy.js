const isNaN = require("./isNaN.js");
const isNull = require("./isNull.js");
const isFalse = require("./isFalse.js");
const isUndefined = require("./isUndefined.js");

/**
* Evaluate if an object is a falsy value or not.
* @param    {Object}   obj          The object to evaluate
* @returns  {Boolean}               True if the object is falsy, false otherwise
*/
function isFalsy(obj)
{
    return (isUndefined(obj) || isNull(obj) || isNaN(obj) || obj === "" || obj === 0 || isFalse(obj));
}

module.exports = isFalsy;