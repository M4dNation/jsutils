const deep = require("./deep.js");
const isBool = require("../object/isBool.js");
const isNumber = require("../object/isNumber.js");
const isFunction = require("../object/isFunction.js");

/**
 * Get the sum of all numerics value inside a collection.
 * @param   {Object}    col         The collection to evaluate
 * @param   {Function}  fn          The function to apply
 * @param   {Boolean}   deeply      If true, make iteration on nested arrays and objects
 * @returns {Number}                The sum of all numerical values inside the collection
 */
function sum(col, fn, deeply) 
{
    var deeply = deeply || isBool(fn) ? fn : false,
        iterator = isFunction(fn) ? fn : Utility.identity,
        ret = 0;

    deep(col, function (depth, index, value) 
    {
        if (isNumber(value))
            ret += iterator.call(col, value);
    }, deeply ? "*" : 1);

    return ret;
}

module.exports = sum;