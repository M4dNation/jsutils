const getAppVersion = require("./getAppVersion.js");

/**
 * Evaluate if current environment uses Linux.
 * @returns {Boolean} True if current environment uses Linux, false otherwise.
 */
function isLinux() 
{
    return /linux/.test(getAppVersion());
}

module.exports = isLinux;