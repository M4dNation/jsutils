const len = require("../collection/len.js");

/**
 * Get a file extension.
 * @param   {String}    str     The string on which get the file extension
 * @returns {String}            The file extension
 */
function ext(str) 
{
    var exts = str.split('.');

    return exts[len(exts) - 1];
}

module.exports = ext;