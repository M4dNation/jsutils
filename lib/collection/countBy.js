const groupBy = require("./groupBy.js");

/**
 * Count how many element are in a collection.
 * The object returned uses the value as the property that references the number of values in that group.
 * @param   {Object}    col         The collection to count.
 * @param   {Function}  map         The function to apply.
 * @param   {Object}    scope       The context to bound to.
 * @return  {Object}  Grouped elements.
 */
function countBy(col, map, scope) 
{
    return groupBy(col, map, scope || this, true);
}

module.exports = countBy;