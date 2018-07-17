const deep = require("./deep.js");
const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
 * Flatten a collection with a specified depth.
 * @param       {Object}    col     The collection to flatten
 * @param       {Number}    n       The depth to consider
 * @returns     {Array}             The flatten collection as an array
 */
function flatten(col, n) 
{
    var ret = [], n = n || "*", nested;

    deep(col, function (depth, index, elm) 
    {
        nested = !isArray(elm) && !isPlainObject(elm)

        if (depth == "*") 
        {
            if (nested)
                ret.push(elm);
        }
        else if (depth > 1) 
        {
            if (nested)
                ret.push(elm);
        }
        else 
        {
            ret.push(elm);
        }
    }, n);

    return ret;
}

module.exports = flatten;