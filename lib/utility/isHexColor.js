const isString = require("../object/isString.js");
const isNumber = require("../object/isNumber.js");

const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

/**
 * Transform an hex value to an rgb one.
 * @param   {String}    hex     The hex valu
 * @returns {Object}            The corresponding rgb object
 */
function isHexColor(color) 
{
    if (isString(color))
        return hexcolor.test(color);

    if (isNumber(color))
        return color < 16777215 && color > 0;

    return false;
}

module.exports = isHexColor;