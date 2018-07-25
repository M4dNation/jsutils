const len = require("./len.js");
const deep = require("./deep.js");
const isBool = require("../object/isBool.js");
const isNumber = require("../object/isNumber.js");
const isFunction = require("../object/isFunction.js");

/**
* Calculate the average of all numeric value in a collection.
* @param    {Object}    col         The collection to process on
* @param    {Function}  fn          The function to apply before calculation
* @param    {Boolean}   deeply      If true, make iteration on nested arrays and objects
* @returns  {Number}                The average of all the numeric value in the collection
*/
function average(col, fn, deeply)
{
    var sumTotal = 0, deeply = deeply || isBool(fn) ? fn : false, iterator = isFunction(fn);

    deep(col, function (depth, index, value, ref) 
    {
        if (isNumber(value))
            sumTotal += iterator ? fn.call(this, value, index, ref) : value;
    }, deeply ? "*" : 1);

    return sumTotal / len(col, deeply);
}

module.exports = average;