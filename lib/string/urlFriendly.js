/**
 * Transform a string to be url friendly.
 * @param   {String}    str     The string on which apply url friendly transformation
 * @returns {String}            An url friendly string
 */
function urlFriendly(str) 
{
    return str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

module.exports = urlFriendly;