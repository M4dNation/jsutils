/**
 * Temper a function for n milliseconds.
 * @param   {Function}  fn      The function to call
 * @param   {Number}    n       The number of milliseconds to wait before calling the function
 * @param   {Boolean}   edge    If true, fn is triggered on the leading edge of the interval,
 *                              on the trailing otherwise.
 * @returns {Function}          The computed function
 */
function debounce(fn, n, edge) 
{
    var res, timeout;
    return function () 
    {
        var scope = this, fargs = arguments;
        var next = function () 
        {
            timeout = null;
            if (!edge)
                res = fn.apply(scope, fargs);
        };

        var ready = edge && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(next, n);

        if (ready)
            res = fn.apply(scope, fargs);

        return res;
    };
}

module.exports = debounce;