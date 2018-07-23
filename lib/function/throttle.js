/**
 * Call a function only each n milliseconds.
 * This is actually a wrapper for setTimeout call for any functions.
 * @param   {Function}  fn      The function to call
 * @param   {Number}    n       The number of milliseconds to wait between each call
 * @returns {Function}          The computed function
 */
function throttle(fn, n) 
{
    var scope, last, timeout, fargs, ret, res, later;

    later = function () 
    {
        last = new Date;
        timeout = null;
        ret = fn.apply(scope, fargs);
    };

    return function () 
    {
        var now = new Date();
        var left = n - (now - last);
        scope = this;
        fargs = arguments;
        if (left <= 0) 
        {
            clearTimeout(timeout);
            timeout = null;
            last = now;
            res = fn.apply(scope, fargs);
        }
        else if (!timeout) 
        {
            timeout = setTimeout(later, left);
        }
        return res;
    }
}

module.exports = throttle;