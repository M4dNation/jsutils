/**
 * Transform a string to camel case notation.
 * Note: If the str is snake case, this function won't work.
 * @param   {String}    str     The string on which apply camel casing
 * @returns {String}            The camel-cased string
 */
function toCamelCase(str) 
{
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) 
    {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

module.exports = toCamelCase;