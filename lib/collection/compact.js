const filter = require("./filter.js");
const isEmpty = require("./isEmpty.js");
const isFalsy = require("../object/isFalsy.js");

/**
 * Create an array copy of a collection with falsy value removed.
 * @param       {Object}    col     The collection to copy
 * @param       {Boolean}   all     If true, empty arrays or objects will be removed
 * @returns     {Array}             The copy of the collection.
 */
function compact(col, all) 
{
    return filter(col, function (v) 
    {
        if (all && !isFalsy(v) && !isEmpty(v))
            return true;
        else if (!all && !isFalsy(v))
            return true;
    });
}

module.exports = compact;