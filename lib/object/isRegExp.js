/**
* Evaluate if an object is a regular expression.
* @param    {Object}   obj      The object to evaluate
* @returns  {Boolean}           True if the object is a regular expression, false otherwise
*/
function isRegExp(obj) 
{
    return {}.toString.call(obj) === "[object RegExp]" || obj instanceof RegExp;
}

module.exports = isRegExp;