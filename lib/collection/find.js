const deep = require("./deep.js");
const isBool = require("../object/isBool.js");

/**
* Search through a collection and return the first element that passes a test.
* @param    {Object}        col         The collection to search through
* @param    {Function}      fn          The test to pass
* @param    {Object}        scope       The context to bound to
* @param    {Boolean}       deeply      If true, make iteration on nested arrays and objects
* @param    {String}        mode        If key mode, make test on a key instead of the value
* @returns  {String|Number}             The first element to pass the test
*/
function find(col, fn, scope, deeply, mode) 
{
    deeply = isBool(scope) ? scope : deeply;

    var res = deep(
    {
        obj: col,
        fn: function (d, i, v) 
        {
            if (fn.call(scope ? scope : this, mode === "key" ? i : v))
                return true;
        },
        depth: deeply ? '*' : 1
    });

    return res.length >= 1 ? res[0] : undefined;
}

module.exports = find;