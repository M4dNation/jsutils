const get = require("./get.js");
const isEqual = require("./isEqual.js");
const isPlainObject = require("./isPlainObject.js");
const getByType = require("../collection/getByType.js");

/**
 * parent
 * This function is used in order to get a nested object inside a parent one.
 * @param   {Object}   obj        The object to evaluate.
 * @param   {String}   key         The property to look for.
 * @return  {Object}  The nested object if found, the whole object otherwise.
 */
function parent(obj, key) 
{
    var target = key ? get(obj, key) : obj,
        objs = getByType(obj, "object", true);

    for (var o in objs) 
    {
        if (isPlainObject(objs[o]))
        {
            for (var p in objs[o]) 
            {
                if (isEqual(objs[o][p], target))
                    return objs[o];
            }
        }
    }

    return obj;
}

module.exports = parent;