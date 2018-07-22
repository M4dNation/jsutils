const indexOf = require("./indexOf.js");

/**
 * Remove all instances of value from the array.
 * @param   {Array}     arr         The array to evaluate
 * @param   {Number}    value       The index or array of index of the values
 * @returns {Array}                 An array of all needed elements
 */
function remove(col, value) 
{
    if (col instanceof Array) 
    {
        var key, i = col.length;
        while (i--) 
        {
            if ((key = indexOf(col, value, true)) !== -1)
                col.splice(key, 1);
        }
    }

    return col;
}

module.exports = remove;