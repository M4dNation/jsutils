const getNavigator = require("./getNavigator.js");

/**
 * Get the vendor of the current browser.
 * @returns {String}  The vendor as a lower case string.
 */
function getVendor() 
{
    let navigator = getNavigator();

    if (navigator)
        return (navigator.vendor || '').toLowerCase();
}

module.exports = getVendor();