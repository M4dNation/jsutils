const each = require("../collection/each.js");
const isArray = require("../object/isArray.js");

/**
 * Transform an array to an object.
 * @returns {Object} The converted object
 */
function toObject() 
{
    var arrs = [], ret = {}, allArrays = true, i = 0;
    each(arguments, function (value) 
    {
        if (isArray(value)) arrs.push(value);
        else allArrays = false;
    });

    if (allArrays && arrs.length === 2) 
    {
        var keys = arrs[1];
        for (; i < arrs[0].length; i++) 
        {
            ret[arrs[0][i]] = keys[i];
        }
    }
    else if (allArrays && arrs.length > 1) 
    {
        for (; i < arrs.length; i++)
        {
            var key = arrs[i][0];
            ret[key] = arrs[i][1];
        }
    }
    else if (allArrays && arrs.length == 1) 
    {
        for (; i < arrs[0].length; i += 2) 
        {
            ret[arrs[0][i]] = arrs[0][i + 1];
        }
    }
    else 
    {
        for (; i < arguments.length; i += 2) 
        {
            ret[arguments[i]] = arguments[i + 1];
        }
    }

    return ret;
}

module.exports = toObject;