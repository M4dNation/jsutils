const isAndroid = require("./isAndroid.js");
const getUserAgent = require("./getUserAgent.js");

/**
 * Evaluate if current device is an Android phone.
 * @returns {Boolean} True if current device is an Android phone, false otherwise.
 */
function isAndroidPhone() 
{
    return isAndroid() && /mobile/.test(getUserAgent());
}

module.exports = isAndroidPhone;