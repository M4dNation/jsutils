/**
 * Call a function each n times.
 * @param   {Function}  fn      The function to call
 * @param   {Number}    n       The number of times it needs to be called
 * @returns {Function}          The computed function
 */
function after(fn, n) 
{
    fn.n = fn.after = n;
    return function () 
    {
        if (fn.n > 1) 
        {
            fn.n--;
        }
        else 
        {
            fn.n = fn.after;
            return fn.apply(this, arguments);
        }
    };
}

module.exports = after;