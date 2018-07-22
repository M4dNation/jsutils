const isBool = require("../object/isBool.js");
const isEqual = require("../object/isEqual.js");
const isNumber = require("../object/isNumber.js");

/**
 * lastIndexOf
 * This function is used in order to get the last index at which value occurs.
 * @param   {Array}     arr         The array to evaluate
 * @param   {Number}    value       The value to look for
 * @param   {Number}    from        The starting index
 * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects
 * @returns {Number}                The index of the element if found, -1 otherwise
 */
function lastIndexOf(arr, value, from, deep) 
{
    if (arr == null)
        return -1;

    var deep = deep || isBool(from) ? from : false, from = isNumber(from) ? from : arr.length;

    if (arr.lastIndexOf && !deep)
        return arr.lastIndexOf(value, from);

    while (--from)
    {
        if (deep && isEqual(arr[from], value))
            return from;
        else if (arr[from] === value)
            return from;
    }

    return -1;
}

module.exports = lastIndexOf;