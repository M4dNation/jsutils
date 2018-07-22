/**
 * Make a function single use only.
 * @param   {Function}  fn      The function to call
 * @returns {Function}          The computed function
 */
function once(fn) 
{
    fn.n = fn.once = 1;
    return function () 
    {
        if (fn.n) {
            fn.n--;
            return fn.apply(this, arguments);
        }
    };
}

module.exports = once;