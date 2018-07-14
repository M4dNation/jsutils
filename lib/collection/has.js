const findKey = require("./findKey.js");

/**
* Evaluate if a property/index in a collection exists.
* @param    {Object}            col     The collection to search into
* @param    {String|Number}     key     The key to look for
* @param    {Boolean}           deep    If true, make iteration on nested arrays and objects
* @returns  {Boolean}                   True if the property/index exists, false otherwise
*/
function has(col, key, deep)
{
    return !deep && Object.hasOwnProperty ? hasOwnProperty.call(col, key) : findKey(col, function (index) 
    {
        return !!(key == index);
    }, deep) ? true : false;
}

module.exports = has;