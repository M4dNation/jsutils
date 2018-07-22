const each = require("./each.js");
const values = require("./values.js");
const type = require("../object/type.js");
const isFalsy = require("../object/isFalsy.js");
const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
 * Get the number of elements in a collection that are not falsy.
 * @param   {Object}    col     The collection to evaluate
 * @param   {Boolean}   deep    If true, make iteration on nested arrays and objects
 * @param   {Number}    count   Should not be provided, used for recursive calls
 * @returns {Number}            The number of elements in the collection that are not falsy
 */
function size(col, deep, count) 
{
    count = count ? count : 0;
    each(values(col), function (value) 
    {
        if (!isFalsy(value))
            count += 1;
    });

    if (deep) 
    {
        for (var o in col) 
        {
            if (isPlainObject(col[o]) || isArray(col[o])) 
            {
                var ret = size(col[o], deep, count);

                if (type(col[o]) === "array")
                    return ret - 1;
                else if (type(col[o]) === "object")
                    return ret;
            }
        }
    }

    return count;
}

module.exports = size;