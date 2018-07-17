const isBool = require("../object/isBool.js");
const isNumber = require("../object/isNumber.js");
const isEqual = require("../object/isEqual.js");

/**
 * Get the first index at which value occurs.
 * @param   {Array}     arr         The array to evaluate
 * @param   {Number}    value       The value to look for
 * @param   {Number}    from        The starting index
 * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
 * @returns {Number}                The index of the element if found, -1 otherwise
 */
function indexOf(arr, value, from, deep) 
{
    if (arr == null)
        return -1;

    var deep = deep || isBool(from) ? from : false, from = isNumber(from) ? from : 0;

    if (arr.indexOf && !deep)
        return arr.indexOf(value, from);

    for (var i = 0; i < arr.length; i++) 
    {
        if (deep && isEqual(arr[i], value) && i >= from)
            return i;
        else if (arr[i] === value && i >= from)
            return i;
    }

    return -1;
}

module.exports = indexOf;