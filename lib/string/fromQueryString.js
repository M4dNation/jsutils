const each = require("../collection/each.js");

/**
 * Create an object from a query string encoded by toQueryString.
 * @param   {String}    str     The query string to evaluate
 * @param   {Boolean}   deep    If true, the function will attempt to reassemble all arrays encoded
 * @returns {Object}            The object from the query string
 */
function fromQueryString(str, deep) 
{
    var ret = {}, parts;

    each(decodeURIComponent(str).split("&"), function (value) 
    {
        parts = value.split("=");
        if (parts[0].match(/\[\]/g) && deep) 
        {
            parts[0] = parts[0].replace(/\[\]/g, '');
            if (parts[0] in ret) 
            {
                ret[parts[0]].push(parts[1]);
            }
            else 
            {
                ret[parts[0]] = [parts[1]];
            }
        }
        else 
        {
            ret[parts[0]] = parts[1];
        }
    });

    return ret;
}

module.exports = fromQueryString;