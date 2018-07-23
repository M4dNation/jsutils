const isIpad = require("./isIpad.js");
const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * This function is used in order to know if current device is an iPhone.
 * @return  {Boolean} True if current device is an iPhone, false otherwise.
 */
function isIphone(range) 
{
    // avoid false positive for Facebook in-app browser on ipad;
    // original iphone doesn't have the OS portion of the UA
    var match = isIpad() ? null : getUserAgent().match(/iphone(?:.+?os (\d+))?/);

    return match !== null && compareVersion(match[1] || 1, range);
}

module.exports = isIphone;