const each = require("../collection/each.js");

/**
 * Set default values in an object.
 * @param   {Object} obj        The object to evaluate
 * @param   {Object} defaults   The defaults value as an object
 * @returns {Object}            The transformed object
 */
function defaults(obj, defaults) 
{
    each(defaults, function (value, index) 
    {
        if (!(index in obj)) 
        {
            obj[index] = value;
        }
        else 
        {
            if (obj[index] === null || obj[index] === undefined)
                obj[index] = value;
        }
    });

    return obj;
}

module.exports = defaults;