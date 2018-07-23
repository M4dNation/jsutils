const getAppVersion = require("./getAppVersion.js");

/**
 * Evaluate if current device is a mac.
 * @return  {Boolean} True if current device is a mac, false otherwise.
 */
function isMac() 
{
    return /mac/.test(getAppVersion());
}

module.exports = isMac;