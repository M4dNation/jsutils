const has = require("./has.js");

/**
 * Apply a function to each element of a collection.
 * If the function returns false, the loop will break and the callback returns.
 * @param   {Object}    col         The collection to process on
 * @param   {Function}  fn          The function to apply
 * @param   {Object}    scope       The context to bound to
 */
function each(col, fn, scope) 
{
    if (col == null)
        return;

    if (col.forEach) 
    {
        col.forEach(fn, scope);
    }
    else if (col instanceof Array) 
    {
        for (let i = 0; i < col.length; i++) 
        {
            if (fn.call(scope || col[i], col[i], i, col) === false)
                return;
        }
    }
    else 
    {
        for (let key in col) 
        {
            if (has(col, key)) 
            {
                if (fn.call(scope || col[key], col[key], key, col) === false)
                    return;
            }
        }
    }
}

module.exports = each;