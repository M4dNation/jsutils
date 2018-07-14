const has = require("./has.js");

/**
* Add an element to an existing collection.
* @param    {Object}    col         The collection to add to
* @param    {Object}    key         The key position where you wanna add
* @param    {Object}    value       The value to add at key position
* @returns  {Object}                The collection with the added element
*/
function add(col, key, value) 
{
    var path = key.toString().split("."), target = col;

    for (let i = 0; i < path.length; i++) 
    {
        if (has(target, path[i]) && i != path.length - 1) 
        {
            target = target[path[i]];
        }
        else if (!has(target, path[i]) && i == path.length - 1) 
        {
            target[path[i]] = value;
        }
    }

    return col;
}

module.exports = add;