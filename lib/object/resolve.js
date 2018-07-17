const paths = require("../collection/paths.js");

/**
 * This function is used in order to get a value from a namespace or an extracted namespace from a partial one.
 * @param   {Object}   obj         The object to evaluate.
 * @param   {Boolean}  p       If true look for a namespace, for a value otherwise.
 * @param   {String}   keys        A dot delimited namespace.
 * @param   {Boolean}  own         If true non enumerable properties become accessible, not otherwise.
 * @return  {String}  The property value or namespace.
 */
function resolve(obj, p, key, own) 
{
    if ((p in obj) && !key)
        return obj[p];

    return paths(obj, key, own)[p];
}

module.exports = resolve;