const filter = require("../collection/filter.js");

/**
 * Get all elements but the first n elements.
 * @param   {Array}     arr         The array to evaluate
 * @param   {Number}    n           The number of elements to skip
 * @returns {Array}                 An array of all needed elements
 */
function tail(arr, n) 
{
    var m = n || 1;

    return filter(arr, function (v, i) 
    {
        if (i >= m)
            return true;
    });
}

module.exports = tail;