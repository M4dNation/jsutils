const each = require("../collection/each.js");

/**
 * Get the name value pair from an object.
 * @param   {Object}    obj     The object to evaluate
 * @returns {Array}             An array of arrays of pairs
 */
function pairs(obj) 
{
    var pairs = [];

    each(obj, function (value, index) 
    {
        pairs.push([index, value]);
    });

    return pairs;
}

module.exports = pairs;