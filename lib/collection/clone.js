const isBool = require("../object/isBool.js");
const isArray = require("../object/isArray.js");
const isFunction = require("../object/isFunction.js");

/**
 * Create a copy of a collection
 * By default, a shallow clone is returned (where array and objects are copied by reference).
 * @param       {Object}    col     The collection to copy.
 * @param       {Function}  fn      The function to apply after cloning.
 * @param       {Boolean}   deep    If true, make iteration on nested arrays and objects.
 * @returns     {Object}            The copy of the collection.
 */
function clone(col, fn, deep) 
{
    var deep = deep || isBool(fn) ? fn : false,
        iterator = isFunction(fn) ? fn : Utility.identity,
        ret = isArray(col) ? [] : {}, i;

    for (var i in col) 
    {
        if (typeof col[i] == "object" && deep)
            ret[i] = clone(col[i], fn, deep);
        else if (!(typeof col[i] == "object"))
            ret[i] = iterator.call(col, col[i]);
        else
            ret[i] = col[i];
    }

    return ret;
}

module.exports = clone;