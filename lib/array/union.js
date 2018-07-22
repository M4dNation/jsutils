const unique = require("./unique.js");

/**
 * Transform two arrays into one.
 * @returns {Array} The new array
 */
function union() 
{
    return unique(Array.prototype.concat.apply(Array.prototype, arguments));
}

module.exports = union;