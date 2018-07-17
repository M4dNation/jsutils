/**
* Evaluate if an object is a function or not.
* @param    {Object}    obj     The object to evaluate
* @returns  {Boolean}           True if the object is a function, false otherwise
*/
function isFunction(obj)
{
    return {}.toString.call(obj) === "[object Function]";
}

module.exports = isFunction;