const isBool = require("./isBool.js");

/**
* Evaluate if an object is the true boolean or not.
* @param    {Object}    obj     The object to evaluate.
* @returns  {Boolean}           True if the object is the true boolean, false otherwise.
*/
function isTrue(obj) 
{
    return (isBool(obj) && Boolean(obj) === true);
}

module.exports = isTrue;