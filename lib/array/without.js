const filter = require("../collection/filter.js");
const contains = require("../collection/contains.js");

/**
 * Get a copy of the arr with the values removed.
 * @param   {Array}     arr         The arr to process on
 * @param   {Array}     values      The values to exclude
 * @returns {Array}                 The new array
 */
function without(arr, values) 
{
    return filter(arr, function (v) 
    {
        if (!contains(values, v))
        {
            return true;
        }
    });
}

module.exports = without;