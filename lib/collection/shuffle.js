const toArray = require("../object/toArray.js");
const isPlainObject = require("../object/isPlainObject.js");

/**
 * Get a randomized copy of values in a collection.
 * @param   {Object}    col     The collection to shuffle
 * @returns {Object}            A randomized copy of the collection
 */
function shuffle(col) 
{
    var ret, n, copy;
    ret = isPlainObject(col) ? toArray(col) : col;

    for (var i = ret.length - 1; i > 0; i--) 
    {
        n = Math.floor(Math.random() * (i + 1));
        copy = ret[i];
        ret[i] = ret[n];
        ret[n] = copy;
    }

    return ret;
}

module.exports = shuffle;