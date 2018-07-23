const isOpera = require("./isOpera.js");
const getVendor = require("./getVendor.js");
const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * Evaluate if current browser is Google Chrome.
 * @returns {Boolean} True if current browser is Google Chrome, false otherwise.
 */
function isChrome(range) 
{
    let userAgent = getUserAgent();
    let match = /google inc/.test(getVendor()) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;

    return match !== null && !isOpera() && compareVersion(match[1], range);
}

module.exports = isChrome;