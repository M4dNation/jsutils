const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * Evaluate if current browser is Internet Explorer.
 * @returns {Boolean}   True if current browser is Internet Explorer, false otherwise.
 */
function isInternetExplorer(range) 
{
    var match = getUserAgent().match(/(?:msie |trident.+?; rv:)(\d+)/);

    return match !== null && compareVersion(match[1], range);
}

module.exports = isInternetExplorer;