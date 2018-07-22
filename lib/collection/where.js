const find = require("./find.js");
const filter = require("./filter.js");

/**
 * Get all name/value pairs in list containing the name/value pairs in matches.
 * @param   {Object}    col         The collection to evaluate
 * @param   {Object}    matches     The matching values
 * @param   {String}    useFind     The algorithm to use (find if true or filter otherwise)
 * @returns {Array}                 An array of all matching collection elements
 */
function where(col, matches, useFind) 
{
    const func = 
    {
        find,
        filter
    };

    return func[useFind ? "find" : "filter"](col, function (value) 
    {
        for (var key in matches) 
        {
            if (matches[key] !== value[key])
                return false;
        }

        return true;
    });
}

module.exports = where;