const deep = require("./deep.js");
const isBool = require("../object/isBool.js");

/**
* Evaluate if a test applies at least to one element of the collection.
* TODO: This function is not working properly and should be rewritten!!
* @param    {Object}    col         The collection to test
* @param    {Function}  fn          The test to pass
* @param    {Object}    scope       The context to bound to
* @param    {Boolean}   deeply      If true, make iteration on nested arrays and objects
* @returns  {Boolean}               True if one element pass the test, false otherwise
*/
function any(col, fn, scope, deeply) 
{
    var ret = false, deeply = isBool(scope) ? scope : deeply;

    deep(col, function (depth, index, value) 
    {
        if (fn.call(!isBool(scope) ? (scope || this) : this, value, index)) 
        {
            if (!ret) 
                ret = true;
            
            ret = true;
        }
    }, deeply ? "*" : 1);

    return ret;
}

module.exports = any;