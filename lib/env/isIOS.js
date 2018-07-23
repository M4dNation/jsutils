const isIpad = require("./isIpad.js");
const isIpod = require("./isIpod.js");
const isIphone = require("./isIphone.js");

/**
 * Evaluate if current environment uses iOS.
 * @returns {Boolean}   True if current environment uses iOS, false otherwise.
 */
function isIOS() 
{
    return isIphone() || isIpad() || isIpod();
}

module.exports = isIOS;