const isWindows = require("./isWindows.js");
const getUserAgent = require("./getUserAgent.js");

/**
 * Evaluate if current device is a Windows phone.
 * @returns {Boolean} True if current device is a Windows phone, false otherwise.
 */
function isWindowsPhone() 
{
    return isWindows() && /phone/.test(getUserAgent());
}

module.exports = isWindowsPhone;