const deep = require("../collection/deep.js");

/**
 * Get the value at specified key.
 * @param   {Object}    obj     The object to evaluate
 * @param   {Object}    key     The key to get the value from
 * @returns {Object}            The needed value (can be a nested array or a nested object)
 */
function get(obj, key) 
{
    return deep(obj, function (d, i) { if (key == i) return true; })[0];
}

module.exports = get;