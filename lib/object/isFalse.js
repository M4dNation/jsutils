const isBool = require("./isBool.js");

/**
* Evaluate if an object is the false boolean or not.
* @param    {Object}    obj     The object to evaluate.
* @returns  {Boolean}           True if the object is the false boolean, false otherwise.
*/
function isFalse(obj) 
{
    return (isBool(obj) && Boolean(obj) === false);
}

module.exports = isFalse;