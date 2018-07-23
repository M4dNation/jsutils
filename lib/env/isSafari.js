const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * Evaluate if current browser is Safari.
 * @returns {Boolean} True if current browser is Safari, false otherwise.
 */
function isSafari(range) 
{
    var match = getUserAgent().match(/version\/(\d+).+?safari/);

    return match !== null && compareVersion(match[1], range);
}

module.exports = isSafari;