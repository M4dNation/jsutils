const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js"); 

/**
* Perform a deep iteration on the target collection.
* @param    {Object}    col         The collection to count
* @param    {Function}  fn          The function to apply
* @param    {Object}    depth       The depth needed
* @returns  {Array}                 An array of values that have passed the condition established by the function to apply
*/
function deep(col, fn, depth) 
{
    var obj = col.obj || col,
        fn = col.fn || fn,
        depth = col.depth || (depth || "*"),
        args = col.args || [],
        noArrays = col.noArrays || false,
        noObjects = col.noObjects || false,
        retType = col.retType || false,
        ret = col.ret || [];

    for (var o in obj) 
    {
        args.unshift(depth, o, obj[o], obj);

        if (fn.apply(this, args))
            ret.push(obj[o]);

        if ((isPlainObject(obj[o]) && !noObjects) || (isArray(obj[o]) && !noArrays)) 
        {
            depth = depth == "*" ? "*" : depth - 1;
            args.splice(0, 4);

            if (depth > 0 || depth === "*") 
            {
                deep({ obj: obj[o], fn: fn, depth: depth, args: args, noArrays: noArrays, noObjects: noObjects, ret: ret });
            }
        }

        args.splice(0, 4);
    }

    return retType ? obj : ret;
}

module.exports = deep;