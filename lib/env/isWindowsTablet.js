const isWindows = require("./isWindows.js");
const getUserAgent = require("./getUserAgent.js");
const isWindowsPhone = require("./isWindowsPhone.js");

/**
 * Evaluate if current device is a Windows tablet.
 * @returns {Boolean} True if current device is a Windows tablet, false otherwise.
 */
function isWindowsTablet()
{
    return isWindows() && !isWindowsPhone() && /touch/.test(getUserAgent());
}

module.exports = isWindowsTablet;