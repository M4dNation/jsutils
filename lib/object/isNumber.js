/**
* Evaluate if an object is a number.
* @param    {Object}    obj         The object to evaluate
* @returns  {Boolean}               True if the object is a number, false otherwise
*/
function isNumber(obj)
{
    return {}.toString.call(obj) === "[object Number]";
}

module.exports = isNumber;