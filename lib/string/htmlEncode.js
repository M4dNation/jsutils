/**
 * Encode common html character into their entity representations.
 * @param   {String}    str     The string on which apply html encoding
 * @returns {String}            The html encoded string
 */
function htmlEncode(str) 
{
    var entities =
    {
        '\u0026': ['amp'], '\u0022': ['quot'], '\u0027': ['apos'], '\u003C': ['lt'],
        '\u003E': ['gt'], '\u00A0': ['nbsp'], '/': ['#x2F']
    };

    for (var e in entities) 
    {
        var entity = new RegExp(e, 'g');
        str = str.replace(entity, '&' + entities[e][0] + ';');
    }

    return str;
}

module.exports = htmlEncode;