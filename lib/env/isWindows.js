const getAppVersion = require("./getAppVersion.js");

/**
 * Evaluate if current environment uses Windows.
 * @returns {Boolean} True if current environment uses Windows, false otherwise.
 */
function isWindows() 
{
    return /win/.test(getAppVersion());
}

module.exports = isWindows;