const has = require("./has.js");
const each = require("./each.js");
const isBool = require("../object/isBool.js");
const isString = require("../object/isString.js");

/**
 * Group collection values after running each through a function.
 * @param       {Object}    col         The collection to test
 * @param       {Function}  map         The function used to group elements
 * @param       {Object}    scope       The context to bound to
 * @param       {Boolean}   count       If true, group by number of similar element in the collection
 * @returns     {Object}                All groups of elements
 */
function groupBy(col, map, scope, count) 
{
    count = count || isBool(scope) ? scope : false;

    var res = {};

    each(col, function (value, index) 
    {
        var key = isString(map) ? value[map] : map.call(scope || this, value, index, col);
        if (has(res, key))
            res[key].push(value);
        else
            res[key] = [value];
    });

    if (count) 
    {
        each(res, function (value, index) 
        {
            res[index] = value.length;
        });
    }

    return res;
}

module.exports = groupBy;