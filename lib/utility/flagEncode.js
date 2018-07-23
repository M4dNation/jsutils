const isArray = require("../object/isArray.js");
const isEqual = require("../object/isEqual.js");

/**
 * Encode a list of boolean values as a flag entity.
 * @param   {Array}     booleans        The booleans to parse
 * @param   {Array}     binaryValues    The corresponding binary values
 * @returns {Number}                    The generated flag
 */
function flagEncode(booleans, binaryValues) 
{
    let flag = 0;

    if (!isArray(booleans) || !isArray(binaryValues) || !isEqual(booleans.length, binaryValues.length))
        return flag;

    for (let i = 0; i < booleans.length; i++)
        flag |= booleans[i] ? binaryValues[i] : 0;

    return flag;
}

module.exports = flagEncode;