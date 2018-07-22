const toArray = require("../../lib/object/toArray.js");
const filter = require("../../lib/collection/filter.js");
const isFunction = require("../../lib/object/isFunction.js");

/**
 * Compose functions passed in parameters.
 * @return  {Function} The composed function
 */
function compose() 
{
    var fns = filter(toArray(arguments), function (value) { if (isFunction(value)) return true; });
    return function () 
    {
        var args = arguments;

        for (var i = fns.length - 1; i >= 0; i--) 
        {
            args = [fns[i].apply(this, args)];
        }

        return args[0];
    };
}

module.exports = compose;