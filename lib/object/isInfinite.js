/**
* Evaluate if an object is infinite or not.
* @param    {Object}   obj      The object to evaluate
* @returns  {Boolean}           True if the object is the number infinity, false otherwise
*/
function isInfinite(obj) 
{
    return obj === Infinity || obj === -Infinity;
}

module.exports = isInfinite;