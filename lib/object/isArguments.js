/**
* Evaluate if an object is a function argument object.
* @param    {Object}    obj     The object to evaluate
* @returns  {Boolean}           True if the object is a function argument object, false otherwise
*/
function isArguments(obj)
{
    return {}.toString.call(obj) === "[object Arguments]";
}

module.exports = isArguments;