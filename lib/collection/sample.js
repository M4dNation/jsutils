const flatten = require("./flatten.js");
const shuffle = require("./shuffle.js");

/**
 * Search through all values in a collection and return a random sample.
 * @param   {Object}    col     The collection to get a sample from
 * @param   {Number}    n       The number of element to get
 * @param   {Boolean}   deep    If true, make iteration on nested arrays and objects
 * @returns {Array}             A random sample of the collection
 */
function sample(col, n, deep) 
{
    var ret = [], i;

    for (i = n || 1; i > 0; i--) 
    {
        ret.push(shuffle(deep ? flatten(col) : col)[0]);
    }

    return ret;
}

module.exports = sample;