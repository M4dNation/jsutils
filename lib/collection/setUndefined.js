const deep = require("./deep.js");
const isUndefined = require("../object/isUndefined.js");

/**
 * Set all undefined value of a collection.
 * @param       {Object}        col         The collection to set
 * @param       {Object}        value       The value to insert
 * @param       {Boolean}       deeply      If true, make iteration on nested arrays and objects
 * @returns     {Array|Object}              The new collection
 */
function setUndefined(col, value, deeply) 
{
    return deep(
    {
        obj: col, 
        fn: function (d, index, v, ref) 
        {
            if (isUndefined(v))
                ref[index] = value;
        }, 
        depth: deeply ? "*" : 1, 
        retType: true
    });
}

module.exports = setUndefined;
