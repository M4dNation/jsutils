const deep = require("./deep.js");
const isBool = require("../object/isBool.js");
const isNumber = require("../object/isNumber.js");
const isFunction = require("../object/isFunction.js");

/**
 * Get the minimum value in a collection.
 * @param   {Object}    col         The collection to search through
 * @param   {Function}  fn          The function to apply
 * @param   {Boolean}   deeply      If true, make iteration on nested arrays and objects
 * @returns {Number}                The minimum value
 */
function min(col, fn, deeply) 
{
    var minVals = [], deeply = deeply || isBool(fn) ? fn : false, iterator = isFunction(fn);

    deep(col, function (depth, index, value, ref) 
    {
        if (isNumber(value))
            minVals.push(iterator ? fn.call(this, value, index, ref) : value);
    }, deeply ? "*" : 1);

    return Math.min.apply(this, minVals);
}

module.exports = min;