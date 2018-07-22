const paths = require("./paths.js");

/**
 * Get an array of all values inside a collection.
 * @param   {Object}    col     The collection to evaluate
 * @param   {Boolean}   deep    If true, make iteration on nested arrays and objects
 * @returns {Array}             An array of all values inside the collection
 */
function values(col, deep) 
{
    var vals = [];

    for (var o in col) 
    {
        vals.push(col[o]);
    }

    return deep ? values(paths(col)) : vals;
}

module.exports = values;