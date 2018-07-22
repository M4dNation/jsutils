const least = require("./least.js");

/**
 * Get the value with the most occurences in a collection.
 * @param   {Object}        col     The collection to get the value from
 * @param   {Function}      fn      The function mapping the test
 * @returns {Array}                 The first value the most represented in a collection
 */
function most(obj, fn) 
{
    return least(obj, fn, true);
}

module.exports = most;