/**
 * Flip a collection's name/value or index/element pairs.
 * @param       {Object}    col     The collection to invert
 * @returns     {Object}            The inverted collection
 */
function invert(col) 
{
    var inverted = {}, i = -1, keys = Object.keys(col);

    while (++i < keys.length) 
    {
        inverted[col[keys[i]]] = keys[i];
    }

    return inverted;
}

module.exports = invert;