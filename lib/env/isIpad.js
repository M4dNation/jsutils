const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * Evaluate if current device is an iPad.
 * @returns {Boolean} True if current device is an iPad, false otherwise.
 */
function isIpad(range) 
{
    var match = getUserAgent().match(/ipad.+?os (\d+)/);

    return match !== null && compareVersion(match[1], range);
}

module.exports = isIpad;