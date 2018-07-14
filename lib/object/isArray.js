/**
* Evaluate if an object is an array.
* @param    {Object}    obj         The object to evaluate
* @returns  {Boolean}               True if the object is an array, false otherwise
*/
function isArray(obj)
{
    return {}.toString.call(obj) === "[object Array]";
}

module.exports = isArray;