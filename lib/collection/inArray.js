const find = require("./find.js");
const isEqual = require("../object/isEqual.js");

/**
 * Evaluate if a collection contains a certain value.
 * @param       {Object}    col         The collection to copy
 * @param       {Object}    value       The value to look for
 * @param       {Boolean}   deep        If true, make iteration on nested arrays and objects
 * @returns     {Boolean}               True if the value is found, false otherwise
 */
function contains(col, value, deep) 
{
    return isEqual(find(col, function (v) 
    {
        return isEqual(v, value) ? true : false;
    }, deep), value);
}

module.exports = contains;