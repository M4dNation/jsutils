const has = require("./has.js");
const isNumeric = require('../string/isNumeric');

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
        if (i != path.length - 1) {
            if (!has(target, path[i])) {
                set(target, path[i], isNumeric(path[i]) ? [] : {});
            }

            target = target[path[i]];
        } else {
            target[path[i]] = value;
        }
    }

    return col;
}

module.exports = set;