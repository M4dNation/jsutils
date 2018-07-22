const len = require("./len.js");
const each = require("./each.js");

/**
 * Parse a collection into groups of N values.
 * @param       {Object}    col         The collection to group
 * @param       {Number}    n           The number of values per group
 * @param       {Object}    pad         If passed, use this value as a padding
 * @returns     {Array}                 All groups of elements
 */
function groupsOf(col, n, pad) 
{
    var res = [], i = 1, key;
    each(col, function (index, value) 
    {
        if ((key in res) && i < n) 
        {
            res[key].push(value);
            i += 1;
        }
        else 
        {
            key = len(res);
            res[key] = [value];
            i = 1;
        }
    });

    if (pad) 
    {
        each(res, function (value, index) 
        {
            if (value.length < n)
            {
                for (i = value.length; i < n; i++) 
                {
                    res[index].push(pad);
                }
            }
        });
    }

    return res;
}

module.exports = groupsOf;