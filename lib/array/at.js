const keys = require("../collection/keys.js");
const isArray = require("../object/isArray.js");
const filter = require("../collection/filter.js");
const contains = require("../collection/contains.js");

/**
 * Get the elements at an index or an array of indices.
 * @param   {Array}     arr         The array to evaluate
 * @param   {Number}    index       The index or array of index of the elements to get
 * @returns {Array}                 An array of all needed elements
 */
function at(arr, index) 
{
    index = isArray(index) ? keys(index) : index;

    return filter(arr, function (v, i) 
    {
        if (i == index || contains(index, i.toString()))
            return true;
    });
}

module.exports = at;