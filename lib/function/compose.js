const toArray = require("../object/toArray.js");
const filter = require("../collection/filter.js");
const isFunction = require("../object/isFunction.js");

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