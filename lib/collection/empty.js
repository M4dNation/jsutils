const deep = require("./deep.js");
const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
 * Set all value of a collection to undefined.
 * @param       {Object}    col         The collection to copy
 * @param       {Boolean}   deeply      If true, apply empty to nested arrays and objects as weel
 * @returns     {Object}                The formated collection.
 */
function empty(col, deeply) 
{
    var ref = null;
    deep(col, function (d, index, value, r) 
    {
        if (deeply) 
        {
            if (ref == null)
                ref = r;

            if (isPlainObject(value) || isArray(value))
                ref = value;
            else
                ref[index] = undefined;
        }
        else 
        {
            col[index] = undefined;
        }
    }, deeply ? "*" : 1);

    return col;
}

module.exports = empty;
