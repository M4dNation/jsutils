const isIpod = require("./isIpod.js");
const isIphone = require("./isIphone.js");
const isBlackberry = require("./isBlackberry.js");
const isAndroidPhone = require("./isAndroidPhone.js");
const isWindowsPhone = require("./isWindowsPhone.js");

/**
 * Evaluate if current environment is a mobile one.
 * @returns {Boolean} True if current environment is a mobile one, false otherwise.
 */
function isMobile() 
{
    return isIphone() || isIpod() || isAndroidPhone() || isBlackberry() || isWindowsPhone();
}

module.exports = isMobile;