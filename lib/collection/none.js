const deep = require("./deep.js");
const isBool = require("../object/isBool.js");

/**
 * Evaluate if none of the values in a collection passes a test.
 * @param   {Object}    col         The collection to test
 * @param   {Function}  fn          The function to apply
 * @param   {Object}    scope       The context to bound to
 * @param   {Boolean}   deeply      If true, make iteration on nested arrays and objects
 * @returns {Booelan}               True if none passes the test, false otherwise
 */
function none(col, fn, scope, deeply) 
{
    deeply = deeply || isBool(scope) ? scope : false;
    var ret = true;

    deep(col, function (d, i, v) 
    {
        if (fn.call(scope ? scope : this, v, i))
            ret = false;
    }, deeply ? "*" : 1);

    return ret;
}

module.exports = none;
