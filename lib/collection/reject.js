const filter = require("./filter.js");

/**
 * Search through all values in a collection and return all but the values that pass a test in a function.
 * @param   {Object}    col         The collection to evaluate
 * @param   {Function}  fn          The function to apply
 * @param   {Object}    scope       The context to bound to
 * @returns {Array}                 All but the values that passed the test
 */
function reject(col, fn, scope) 
{
    return filter(col, function (v, i, r) 
    {
        return !fn.call(scope || this, v, i, r);
    }, scope || this);
}

module.exports = reject;