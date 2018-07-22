const map = require("./map.js");
const fetch = require("../object/fetch.js");
const resolve = require("../object/resolve.js");
const isFunction = require("../object/isFunction.js");

/**
 * Get an array of sorted elements of a collection.
 * @param       {Object}        col         The collection to evaluate
 * @param       {Function}      fn          The function to apply in order to sort the elements
 * @param       {Object}        scope       The context to bound to
 * @returns     {Array|Object}              The changed collection
 */
function sortBy(col, fn, scope) 
{
    var iterator = isFunction(fn) ? fn : function (v, i, r) 
    {
        var type = typeof r[i];
        if (type == "array" || type == "object")
            return resolve(r[i], fn);
        else
            return v[fn];
    };

    return fetch(map(col, function (value, index, list) 
    {
        return { value: value, index: index, criteria: iterator.call(scope || this, value, index, list) };
    }).sort(function (left, right) 
    {
        var x = left.criteria;
        var y = right.criteria;

        if (x !== y) 
        {
            if (x > y || x === void 0)
                return 1;
            if (x < y || y === void 0)
                return -1;
        }

        return left.index < right.index ? -1 : 1;
    }), "value");
}

module.exports = sortBy;