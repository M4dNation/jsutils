/**
 * Evaluate if an object is an object or not.
 * @param       {Object}    obj     The object to evaluate
 * @returns     {Boolean}           True if the object is an object, false otherwise.
 */
function isObject(obj) 
{
    return typeof obj === "object";
}

module.exports = isObject;
