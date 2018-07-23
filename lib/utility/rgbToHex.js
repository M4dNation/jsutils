/**
 * Transform an rgb color value to an hex.
 * @param   {Number}    r       The red color value
 * @param   {Number}    g       The green color value
 * @param   {Number}    b       The blue color value
 * @returns {String}            The corresponding hexadecimal string
 */
function rgbToHex(r, g, b) 
{
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

module.exports = rgbToHex;