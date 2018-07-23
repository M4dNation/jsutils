const getUserAgent = require("./getUserAgent.js");

/**
 * Evaluate if current device is a Blackberry.
 * @returns {Boolean}   True if current device is a Blackberry, false otherwise.
 */
function isBlackberry() 
{
    let userAgent = getUserAgent();

    return /blackberry/.test(userAgent) || /bb10/.test(userAgent);
}

module.exports = isBlackberry;