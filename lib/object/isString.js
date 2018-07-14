/**
* Evaluate if an object is a string.
* @param    {Object}   obj          The object to evaluate
* @returns  {Boolean}               True if the object is a string, false otherwise
*/
function isString(obj)
{
    return typeof obj === "string" && {}.toString.call(obj) === "[object String]";
}

module.exports = isString;