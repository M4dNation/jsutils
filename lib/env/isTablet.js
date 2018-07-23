const isIpad = require("./isIpad.js");
const isAndroidTablet = require("./isAndroidTablet.js");
const isWindowsTablet = require("./isWindowsTablet.js");

/**
 * Evaluate if current environment is a tablet one.
 * @returns {Boolean}  True if current environment is a tablet one, false otherwise.
 */
function isTablet() 
{
    return isIpad() || isAndroidTablet() || isWindowsTablet();
}

module.exports = isTablet;