const each = require("./each.js");
const flatten = require("./flatten.js");
const isBool = require("../object/isBool.js");

/**
 * Get a new array of values transformed by a function.
 * @param   {Object}    col         The collection to evaluate
 * @param   {Function}  fn          The function to apply
 * @param   {Object}    scope       The context to bound to
 * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects
 * @returns {Array}                 The new array of values
 */
function map(col, fn, scope, deep) 
{
    deep = deep || isBool(scope) ? scope : false;
    var ret = [];

    each(deep ? flatten(col) : col, function (value, index, ref) 
    {
        ret.push(fn.call(scope || this, value, index, ref));
    });

    return ret;
}

module.exports = map;