const type = require("./type.js");

/**
* Evaluate if two objects have the same type.
* @param    {Object}   obj1     The first object to evaluate
* @param    {Object}   obj2     The second object to evaluate
* @returns  {Boolean}           True if the two objects have the same type, false otherwise
*/
function isSameType(obj1, obj2)
{
    return type(obj1) === type(obj2);
}

module.exports = isSameType;