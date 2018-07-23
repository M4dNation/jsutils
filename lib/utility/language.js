const isString = require("../object/isString.js");

/**
 * Get language code from language string such as en-us.
 * @param  {String}     value    The string language to parse from
 * @return {String}              The corresponding language code
 */
function language(value) 
{
    if (isString(value)) 
    {
        var res = value.split("-");
        return res[0];
    }
}

module.exports = language;