const has = require("./has.js");

/**
 * Search through a collection and return those that passes a test.
 * @param   {Object}    col         The collection to search through
 * @param   {Function}  fn          The test to pass
 * @param   {Object}    scope       The context to bound to
 * @returns {Array}                 An array of all matched elements.
 */
function filter(col, fn, scope) 
{
    let ret = [];

    if (col == null)
        return ret;

    if (col.filter) 
    {
        return col.filter(fn, scope);
    }
    else if (col instanceof Array) 
    {
        for (let i = 0; i < col.length; i++)
        {
            if (fn.call(scope || col[i], col[i], i, col))
                ret[ret.length] = col[i];
        }
    }
    else 
    {
        for (let key in col) 
        {
            if (Collection.has(col, key)) 
            {
                if (fn.call(scope || col[key], col[key], key, col))
                    ret[ret.length] = col[key];
            }
        }
    }

    return ret;
}

module.exports = filter;