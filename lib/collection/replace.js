const deep = require("./deep.js");
const isBool = require("../object/isBool.js");
const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
 * Apply a function to replace all elements of a collection.
 * @param       {Object}        col         The collection to evaluate
 * @param       {Function}      fn          The function to apply
 * @param       {Object}        scope       The context to bound to
 * @param       {Boolean}       deeply      If true, make iteration on nested arrays and objects
 * @returns     {Array|Object}              The changed collection
 */
function replace(col, fn, scope, deeply) 
{
    var deeply = isBool(scope) ? scope : deeply, ref = col, scope = !isBool(scope) ? scope : this;

    return deep(
    {
        obj: col,
        fn: function (d, i, v) 
        {
            if (deeply) 
            {
                if (isPlainObject(v) || isArray(v))
                    ref = v;
                else
                    ref[i] = fn.call(scope, v);
            }
            else 
            {
                ref[i] = fn.call(scope, v);
            }
        },
        depth: deeply ? "*" : 1,
        retType: true
    });
}

module.exports = replace;