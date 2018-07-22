/**
 * Call a function n times in a row.
 * @param   {Function}  fn      The function to call
 * @param   {Number}    n       The number of times we need to call the function
 * @returns {Function}          The computed function
 */
function times(fn, n) 
{
    fn.n = n;
    return function () 
    {
        var result;
        for (var i = 0; i < fn.n; i++)
        {
            result = fn.apply(this, arguments);
        }

        return result;
    };
}

module.exports = times;