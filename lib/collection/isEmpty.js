const len = require("./len.js");
const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
 * Evaluate if a collection is empty.
 * @param       {Object}    col     The collection to check
 * @returns     {Boolean}           True if there is no value in the collection, false otherwise
 */
function isEmpty(col) 
{
    return ((isPlainObject(col) && len(col) === 0) || (isArray(col) && col.length === 0));
}

module.exports = isEmpty;