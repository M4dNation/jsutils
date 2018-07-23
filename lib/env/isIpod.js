const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * Evaluate if current device is an iPod.
 * @returns {Boolean} True if current device is an iPod, false otherwise.
 */
function isIpod(range) 
{
    var match = getUserAgent().match(/ipod.+?os (\d+)/);

    return match !== null && compareVersion(match[1], range);
}

module.exports = isIpod;