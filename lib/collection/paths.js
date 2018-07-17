const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
 * Get an object-literal containing unique "namespace paths".
 * For private use only inside jstoolbox.
 */
function paths(col, allKeys, noEnum, pathObj, lastKey, nextKey) 
{
    var o, allKeys = allKeys || false, pathObj = pathObj || {},
        lastKey = lastKey || "", nextKey = nextKey || "",
        props = noEnum ? Object.getOwnPropertyNames(col) : require("./keys.js")(col);

    for (o = 0; o < props.length; o++) 
    {
        if (allKeys)
            pathObj[props[o]] = (nextKey + "." + lastKey + "." + props[o]).replace(/^[.]+/g, "");
        else
            pathObj[(nextKey + "." + lastKey + "." + props[o]).replace(/^[.]+/g, "")] = col[props[o]];

        if (isPlainObject(col[props[o]]) || isArray(col[props[o]])) 
        {
            paths(col[props[o]], allKeys, noEnum, pathObj, props[o], nextKey + "." + lastKey);
        }
    }

    return pathObj;
}

module.exports = paths;