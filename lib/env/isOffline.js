const isOnline = require("./isOnline.js");

/**
 * Evaluate if current device is offline (ie has not internet access at the moment).
 * @returns {Boolean} True if current device is offline, false otherwise.
 */
function isOffline() 
{
    return !isOnline();
}

module.exports = isOffline;