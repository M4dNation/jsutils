const filter = require("./filter.js");
const inArray = require("./inArray.js");
const isString = require("../object/isString.js");

/**
 * Whitelist some values from a collection.
 * @param   {Object}    col     The collection to evaluate
 * @param   {Array}     list    The keys to look for
 * @returns {Array}             All values that matched
 */
function whitelist(col, list) 
{
    var list = isString(list) ? list.split(" ") : list;

    return filter(col, function (value, index) 
    {
        if (inArray(list, index))
            return true;
    });
}

module.exports = whitelist;