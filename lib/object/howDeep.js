const isEqual = require("./isEqual.js");
const keys = require("../collection/keys.js");
const paths = require("../collection/paths.js");
const getByType = require("../collection/getByType.js");

/**
 * Get the depth level of the specified key (first level is 1).
 * @param   {Object} obj        The object to evaluate
 * @param   {Object} key        The key to look for
 * @returns {Number}            The depth level
 */
function howDeep(obj, key) 
{
    var path = paths(obj, true);

    if (key && (key in path)) 
    {
        return path[key].split(".").length;
    }
    else 
    {
        var objs = getByType(obj, "*", true);

        for (let o in objs) 
        {
            if (isEqual(obj, objs[o])) 
            {
                return howDeep(obj, keys(objs[o])[0]);
            }
        }
    }
}

module.exports = howDeep;