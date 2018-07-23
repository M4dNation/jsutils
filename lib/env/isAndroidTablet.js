const isAndroid = require("./isAndroid.js");
const getUserAgent = require("./getUserAgent.js");

/**
 * Evaluate if current device is an Android tablet.
 * @return  {Boolean}   True if current device is an Android tablet, false otherwise.
 */
function isAndroidTablet() 
{
    return isAndroid() && !/mobile/.test(getUserAgent());
}

module.exports = isAndroidTablet;