const isMobile = require("./isMobile.js");
const isTablet = require("./isTablet.js");

/**
 * Evaluate if current environment is a desktop one.
 * @returns {Boolean} True if current environment is a desktop one, false otherwise.
 */
function isDesktop() 
{
    return !isMobile() && !isTablet();
}

module.exports = isDesktop;