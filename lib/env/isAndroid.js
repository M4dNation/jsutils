const getUserAgent = require("./getUserAgent.js");

/**
 * Evaluate if current environment uses Android.
 * @returns     {Boolean}   True if current environment uses Android, false otherwise.
 */
function isAndroid() 
{
    return /android/.test(getUserAgent());
}

module.exports = isAndroid;