const paths = require("./paths.js");

/**
 * Get all the keys of a collection.
 * @param   {Object}        col     The collection to get the key from
 * @param   {Boolean}       deep    If true, make iteration on nested arrays and objects
 * @returns {Array}                 An array of all the keys inside the collection
 */
function keys(col, deep) 
{
    if (!deep && Object.keys) 
    {
        return Object.keys(col);
    }
    else 
    {
        var keys = [];

        for (let o in col) 
        {
            keys.push(o);
        }

        return deep ? keys(paths(col)) : keys;
    }
}

module.exports = keys;