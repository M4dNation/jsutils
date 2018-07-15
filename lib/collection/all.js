const deep = require("./deep.js");
const isBool = require("../object/isBool.js");
const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
* Evaluate if a test applies to all element of the collection.
* @param    {Object}    col         The collection to test
* @param    {Function}  fn          The test to pass
* @param    {Object}    scope       The context to bound to
* @param    {Boolean}   deeply      If true, make iteration on nested arrays and objects
* @returns  {Boolean}               True if all element pass the test, false otherwise
*/
function all(col, fn, scope, deeply) 
{
    var ret = true, deeply = isBool(scope) ? scope : deeply;

    deep(col, function (depth, index, value) 
    {
        if (deeply) 
        {
            if (!isArray(value) && !isPlainObject(value)) 
            {
                if (!fn.call(!isBool(scope) ? (scope || this) : this, value, index))
                    ret = false;
            }
        }
        else 
        {
            if (!fn.call(!isBool(scope) ? (scope || this) : this, value, index))
                ret = false;
        }
    }, deeply ? "*" : 1);

    return ret;
}

module.exports = all;
