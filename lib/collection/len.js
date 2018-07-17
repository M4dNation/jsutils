const keys = require("./keys.js");
const type = require("../object/type.js");
const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
* Get the number of elements in a collection.
* @param    {Object}        col     The collection to evaluate
* @param    {Boolean}       deep    If true, make iteration on nested arrays and objects
* @param    {Number}        count   Should not be provided, used for recursive calls
* @returns  {Number}                The number of elements in the collection
*/
function len(col, deep, count)
{
    var count = count ? (count += keys(col).length) : keys(col).length;

    if (deep) 
    {
        for (let o in col) 
        {
            if (isPlainObject(col[o]) || isArray(col[o])) 
            {
                var ret = len(col[o], deep, count);

                if (type(col[o]) === "array")
                    return ret - 1;
                else if (type(col[o]) === "object")
                    return ret;
            }
        }
    }

    return count;
}

module.exports = len;