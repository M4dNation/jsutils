const each = require("../collection/each.js");

/**
 * Transform an object in an array.
 * @returns {Array} The transformed object as an array
 */
function toArray() 
{
    var ret = [];

    if (arguments.length > 1) 
    {
        for (var i = 0; i < arguments.length; i++) 
        {
            each(arguments[i], function (value) 
            {
                ret.push(value);
            });
        }
    }
    else 
    {
        each(arguments[0], function (value) 
        {
            ret.push(value);
        });
    }

    return ret;
}

module.exports = toArray;