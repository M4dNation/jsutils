const unique = require("./unique.js");
const filter = require("../collection/filter.js");
const contains = require("../collection/contains.js");

/**
 * Get the elements that are not in the second arguments.
 * @param   {Array}     arr     The array to evaluate
 * @returns {Array}             An array of all needed elements
 */
function difference(arr) 
{
    var rest = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));

    return filter(unique(arr), function (v) 
    {
        return !contains(rest, v);
    });
}

module.exports = difference;