const fetch = require("../object/fetch.js");

/**
 * Merge the element of multiple array into one.
 * @param   {Array}     arr     A list of array arguments
 * @returns {Array}             The new array
 */
function zip(arr) 
{
    var i = 0, ret = [],
        arrs = Array.prototype.slice.call(arguments, 0);
    for (; i < arr.length; i++) 
    {
        ret[i] = fetch(arrs, "" + i);
    }

    return ret;
}

module.exports = zip;