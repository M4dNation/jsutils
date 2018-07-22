const each = require("./each.js");
const isArray = require("../object/isArray.js");

/**
 * Clear a collection of all its element.
 * @param   {Object}    col     The collection to clear.
 * @returns {Object}            The cleared collection.
 */
function clear(col) 
{
    if (isArray(col)) 
    {
        col.length = 0;
    }
    else 
    {
        each(col, function (value, index) 
        {
            delete col[index];
        });
    }

    return col;
}

module.exports = clear;