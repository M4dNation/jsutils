/**
* Evaluate if an object is undefined.
* @param    {Object}     obj    The object to evaluate
* @returns  {Boolean}           True if the object is undefined, false otherwise
*/
function isUndefined(obj) 
{
    return typeof obj === "undefined";
}

module.exports = isUndefined;