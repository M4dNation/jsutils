const map = require("./map.js");
const isFunction = require("../object/isFunction.js");

/**
 * Call a function on each value of a collection.
 * @param       {Object}        col     The collection to apply the function to
 * @param       {Function}      fn      The function to apply
 * @param       {Array}         args    An array of all arguments the function to apply need
 * @returns     {Array|Object}          The modified collection.
 */
function invoke(col, fn, args) 
{
    var args = args || [], ret;

    return map(col, function (value) 
    {
        args.unshift(value);
        ret = (isFunction(fn) ? fn : value[fn]).apply(value, args);
        args.shift();

        return ret;
    });
}

module.exports = invoke;