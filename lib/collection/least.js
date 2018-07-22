const max = require("./max.js");
const min = require("./min.js");
const each = require("./each.js");
const countBy = require("./countBy.js");
const isString = require("../object/isString.js");

/**
 * Get the value with the least occurences in a collection.
 * @param       {Object}            col     The collection to get the value from
 * @param       {Function}          fn      The function mapping the test
 * @param       {Boolean}           most    If true, return the value with the most occurences instead
 * @returns     {String|Object}             The first value the least represented in a collection (as a String if a number)
 */
function least(col, fn, most) 
{
    var comparator, result, ret, leastValue;

    if (isString(fn)) 
    {
        result = countBy(col, function (p) 
        {
            return p[fn];
        });

        comparator = countBy(col, function (p) 
        {
            return p[fn];
        }, this, true);
    }
    else 
    {
        result = countBy(col, fn || function (num) { return num; });
        comparator = countBy(col, fn || function (num) { return num; }, this, true);
    }

    leastValue = most ? max(result) : min(result);
    each(result, function (value, index) 
    {
        if (leastValue == value) 
        {
            ret = index;
            return false;
        }
    });

    return ret;
}

module.exports = least;