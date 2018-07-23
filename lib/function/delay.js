/**
 * Call a function n milliseconds later.
 * This is actually a wrapper for setTimeout call for any functions.
 * @param   {Function}  fn      The function to call
 * @param   {Number}    n       The number of milliseconds to wait
 * @returns {Function}          The computed function
 */
function delay(fn, n) 
{
    return function () 
    {
        var args = arguments;
        setTimeout(function () 
        {
            return fn.apply(null, args);
        }, n);
    };
}

module.exports = delay;