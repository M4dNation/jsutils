const resolve = require("./resolve.js");
const map = require("../collection/map.js");

/**
 * Get an array of extracted property values.
 * @param   {Object}    obj     The object to evaluate
 * @param   {String}    key     A dot delimited namespace
 * @returns {Array}             The properties as an array.
 */
function fetch(obj, key) 
{
    return map(obj, function (value) { return resolve(value, key); });
}

module.exports = fetch;