const getNavigator = require("./getNavigator.js");

/**
 * Evaluate if current device is online (ie has internet access at the moment).
 * @returns {Boolean} True if current device is online, false otherwise.
 */
function isOnline() 
{
    let navigator = getNavigator();

    return !navigator || navigator.onLine === true;
}

module.exports = isOnline;