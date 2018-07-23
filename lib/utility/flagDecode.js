const isZero = require("../number/isZero.js");
const isArray = require("../object/isArray.js");

/**
 * Decode a flag as a list of boolean values.
 * @param   {Number}    flag            The flag to parse
 * @param   {Array}     binaryValues    The corresponding binary values
 * @returns {Array}                     The corresponding booleans
 */
function flagDecode(flag, binaryValues) 
{
    let booleans = [];

    if (isZero(flag) || !isArray(binaryValues))
        return [];

    for (let v of binaryValues) 
    {
        if (!isZero(flag & v))
            booleans.push(v);
    }

    return booleans;
}

module.exports = flagDecode;