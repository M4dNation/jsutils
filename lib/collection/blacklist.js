const filter = require("./filter.js");
const contains = require("./contains.js");
const isArray = require("../object/isArray.js");

/**
 * Blacklist some values from a collection.
 * @param   {Object}    col     The collection to evaluate
 * @param   {Array}     list    The keys to look for
 * @returns {Array}             All values that did not match
 */
function blacklist(col, list) 
{
    var props = isArray(list) ? list : [list];

    return filter(col, function (value, index) 
    {
        if (!(index in props) && !(contains(props, index)))
            return value;
    });
}

module.exports = blacklist;