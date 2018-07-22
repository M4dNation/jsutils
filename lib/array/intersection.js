const unique = require("./unique.js");
const indexOf = require("./indexOf.js");
const all = require("../collection/all.js");
const filter = require("../collection/filter.js");

/**
 * Get the elements that are in the second arguments.
 * @param   {Array}     arr     The array to evaluate
 * @returns {Array}             An array of all needed elements
 */
function intersection(arr) 
{
    var arrs = Array.prototype.slice.call(arguments, 1);

    return filter(unique(arr), function (v) 
    {
        return all(arrs, function (alt) 
        {
            return indexOf(alt, v, true) != -1;
        });
    });
}

module.exports = intersection;