/**
* Evaluate if an object is a boolean.
* @param    {Object}   obj          The object to evaluate
* @returns  {Boolean}               True if the object is a boolean, false otherwise
*/
function isBool(obj)
{
    return {}.toString.call(obj) === "[object Boolean]";
}

module.exports = isBool;