const where = require("./where.js");

/**
 * Get the first name/value pairs in list containing the name/value pairs in matches.
 * @param   {Object}    col         The collection to evaluate
 * @param   {Object}    matches     The matching values
 * @returns {Object}                The first matching collection element
 */
function whereFirst(col, matches) 
{
    return where(col, matches, true);
}

module.exports = whereFirst;