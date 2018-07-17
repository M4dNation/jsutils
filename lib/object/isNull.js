/**
 * Evaluate if an object is null or not.
 * @param       {Object}   obj      The object to evaluate
 * @returns     {Boolean}           True if the object is null, false otherwise
 */
function isNull(obj) 
{
    return {}.toString.call(obj) === "[object Null]";
}

module.exports = isNull;