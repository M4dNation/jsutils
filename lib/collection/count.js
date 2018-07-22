const deep = require("./deep.js");
const isBool = require("../object/isBool.js");
const isArray = require("../object/isArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
 * Count how many element passes a test.
 * @param       {Object}    col         The collection to count
 * @param       {Function}  fn          The test to pass
 * @param       {Object}    scope       The context to bound to
 * @param       {Boolean}   deeply      If true, make iteration on nested arrays and objects
 * @returns     {Number}                Number of element in the collection which passed the test.
 */
function count(col, fn, scope, deeply) 
{
    var ret = 0, deeply = isBool(scope) ? scope : deeply;

    deep(col, function (depth, index, value) 
    {
        if (deeply) 
        {
            if (!isArray(value) && !isPlainObject(value)) 
            {
                if (fn.call(!isBool(scope) ? (scope || this) : this, value, index)) 
                {
                    ret++;
                }
            }
        }
        else 
        {
            if (fn.call(!isBool(scope) ? (scope || this) : this, value, index)) 
            {
                ret++;
            }
        }
    }, deeply ? "*" : 1);

    return ret;
}

module.exports = count;