/**
* Evaluate if an object is an Error.
* @param    {Object}   obj      The object to evaluate
* @returns  {Boolean}           True if the object is an Error, false otherwise
*/
function isError(obj) 
{
    return {}.toString.call(obj) === "[object Error]";
}

module.exports = isError;