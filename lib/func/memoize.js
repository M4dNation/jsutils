const identity = require("../../lib/utility/identity.js");

/**
 * Return a memoized version of the function.
 * @param   {Function}  fn      The function to call
 * @param   {String}    hash    A hash key where to store the computed result of the previous execution
 * @returns {Function}          The computed function
 */
function memoize(fn, hash) 
{
    var cache = {};
    hash = hash || (hash = identity);

    return function () 
    {
        var key = hash.apply(this, arguments);
        return (key in cache) ? cache[key] : (cache[key] = fn.apply(this, arguments));
    };
}

module.exports = memoize;