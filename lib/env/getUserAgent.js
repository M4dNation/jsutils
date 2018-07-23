const getNavigator = require("./getNavigator.js");

/**
 * Get the user agent of the current browser.
 * @returns  {String}  The user agent as a lower case string.
 */
function getUserAgent() 
{
    let navigator = getNavigator();

    if (navigator)
        return (navigator.userAgent || '').toLowerCase();
}

module.exports = getUserAgent;