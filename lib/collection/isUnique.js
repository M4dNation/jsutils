const isEqual = require("../object/isEqual.js");

/**
 * Evaluate if a value is unique inside a collection.
 * @param   {Object}    col     The collection to check
 * @param   {Object}    key     The key/index of a the value to verify
 * @returns {Boolean}           True if the value is unique, false otherwise
 */
function isUnique(col, key) 
{
    if (key in col)
    {
        for (let o in col) 
        {
            if (isEqual(col[key], col[o]) && o !== key.toString())
                return false;
        }
    }

    return true;
}

module.exports = isUnique;