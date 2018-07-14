/**
* Evaluate if an object is a plain object or not.
* @param    {Object}   obj      The object to evaluate
* @returns  {Boolean}           True if the object is a plain object, false otherwise
*/
function isPlainObject(obj)
{
    return typeof obj === "object" && {}.toString.call(obj) === "[object Object]";
}

module.exports = isPlainObject;