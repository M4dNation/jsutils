const contains = require("./contains.js");
const flatten = require("./flatten.js");
const shuffle = require("./shuffle.js");

/**
 * Search through all values in a collection and return a random sample.
 * @param   {Object}    col             The collection to get a sample from
 * @param   {Number}    n               The number of element to get
 * @param   {Boolean}   allowDuplicate  If true, allow duplicate in the sample
 * @param   {Boolean}   deep            If true, make iteration on nested arrays and objects
 * @returns {Array}                     A random sample of the collection
 */
function sample(col, n, allowDuplicate, deep) 
{
    var ret = [], i, flat = flatten(col);
    allowDuplicate = allowDuplicate || false;
    deep = deep || false;

    // If after flattening, the number of expected element is still higher
    // return a shuffle of the flattened collection
    if (n >= flat.length)
        return shuffle(flat);

    for (i = n || 1; i > 0; i--) 
    {
        let value = shuffle(deep ? flat : col)[0];

        if (!allowDuplicate)
        {
            while (contains(ret, value))
                value = shuffle(deep ? flat : col)[0];
        }
        
        ret.push(value);
    }

    return ret;
}

module.exports = sample;