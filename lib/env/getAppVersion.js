const getNavigator = require("./getNavigator.js");

/**
 * Get the application version of the current browser.
 * @returns  {String}  The application version as a lower case string.
 */
function getAppVersion() 
{
    let navigator = getNavigator();

    if (navigator)
        return (navigator.appVersion || '').toLowerCase();
}

module.exports = getAppVersion;