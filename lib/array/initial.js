const filter = require("../collection/filter.js");

/**
 * Get all but the last n elements.
 * @param   {Array}     arr     The array to evaluate
 * @param   {Number}    n       The number of elements to skip
 * @returns {Array}             An array of all needed elements
 */
function initial(arr, n) 
{
    var m = n ? arr.length - n : arr.length - 1;

    return filter(arr, function (v, i) 
    {
        if (i < m)
            return true;
    });
}

module.exports = initial;