const isArray = require("./isArray.js");
const deep = require("../collection/deep.js");
const isPlainObject = require("./isPlainObject.js");

/**
 * Create a query string from an object literal.
 * @param   {Object}    obj         The object to evaluate
 * @param   {String}    prefix      A prefix to use
 * @returns {String}                A query string
 */
function toQueryString(obj, prefix) 
{
    var ret = "";
    deep(
    {
        obj: obj,
        fn: function (depth, index, value) 
        {
            index = index.toString();
            if (!isPlainObject(value)) 
            {
                if (isArray(value)) 
                {
                    deep(value, function (arrDepth, arrIndex, arrValue) 
                    {
                        ret += (prefix ? prefix + index + "[]" : index + "[]") + "=" + arrValue + "&";
                    }, "*");
                }
                else 
                {
                    ret += (prefix ? prefix + index : index) + "=" + value + "&";
                }
            }
        },
        depth: "*",
        noArrays: true
    });

    ret = encodeURIComponent(ret.replace(/&$/g, ""));

    return ret;
}

module.exports = toQueryString;