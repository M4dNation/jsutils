const isBool = require("./isBool.js");
const toArray = require("./toArray.js");
const keys = require("../collection/keys.js");
const deep = require("../collection/deep.js");
const each = require("../collection/each.js");
const indexOf = require("../array/indexOf.js");
const filter = require("../collection/filter.js");
const flatten = require("../collection/flatten.js");
const isPlainObject = require("./isPlainObject.js");

/**
 * Merge multiple objects in one.
 * @returns  {Object} The transformed object
 */
function merge() 
{
    var allKeys = [], objs, target, obj, copy, key, i, shouldDeep;

    // Collect potential objects to merge
    objs = filter(toArray(arguments), function (value) 
    {
        if (isBool(value))
            shouldDeep = value;
        if (isPlainObject(value))
            return value;
    });

    // Shift target off of the `objs` array
    target = objs.shift();

    // Perform deep iteration on target
    if (shouldDeep) 
    {
        // Build property reference used to prevent never ending loops
        each(objs, function (value) 
        {
            allKeys.push(keys(value));
            allKeys = flatten(allKeys);
        });

        // Add properties to all nested objects
        deep(target, function (depth, index, obj) 
        {
            if (indexOf(allKeys, index) === -1) 
            {
                for (i = 0; i < objs.length; i++) 
                {
                    for (key in objs[i]) 
                    {
                        if (isPlainObject(obj)) 
                        {
                            copy = objs[i][key];
                            obj[key] = copy;
                        }
                    }
                }
            }
        }, "*");
    }

    // Merge first level properties
    for (i = 0; i < objs.length; i++) 
    {
        if ((obj = objs[i]) !== null) 
        {
            for (key in obj) 
            {
                copy = obj[key];

                if (target === copy)
                    continue;

                target[key] = copy;
            }
        }
    }

    return target;
}

module.exports = merge;