/**
 * Decode html encoded string.
 * @param   {String}    str     The string on which apply html decoding
 * @returns {String}            The html decoded string
 */
function htmlDecode(str) 
{
    var entities =
    {
        '&quot;': ['\"'], '&amp;': ['&'], '&apos;': ["'"], '&lt;': ['<'],
        '&gt;': ['>'], '&nbsp;': [' '], '&#x2F;': ['/']
    };

    for (var e in entities) 
    {
        var entity = new RegExp(e, 'g');
        str = str.replace(entity, entities[e][0]);
    }

    return str;
}

module.exports = htmlDecode;