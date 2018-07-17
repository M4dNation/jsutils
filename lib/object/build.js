/**
 * Transform a namespace into an object.
 * @param       {String}    ns      The namespace to evaluate
 * @param       {Object}    obj     A reference object where insert the result
 * @returns     {Object}            The generated object
 */
function build(ns, obj) 
{
    var list = ns ? ns.split(".") : [], ns = list ? list.shift() : (ns || ""), obj = obj || {};
    obj[ns] = {};

    if (list.length)
        build(list.join("."), obj[ns]);

    return obj;
}

module.exports = build;