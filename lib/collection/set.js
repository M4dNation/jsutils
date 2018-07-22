const has = require("./has.js");

/**
 * Add a value to a collection.
 * @param   {Object}            col         The collection to set
 * @param   {Number|String}     key         The key/index desired
 * @param   {Object}            value       The value to insert
 * @returns {Array|Object}                  The new collection
 */
function set(col, key, value) 
{
    var path = key.toString().split("."), target = col;

    for (var i = 0; i < path.length; i++) 
    {
        if (has(target, path[i]) && i != path.length - 1) 
        {
            target = target[path[i]];
        }
        else if (i == path.length - 1) 
        {
            target[path[i]] = value;
        }
    }

    return col;
}

module.exports = set;