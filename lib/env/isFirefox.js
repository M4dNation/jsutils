const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * Evaluate if current browser is Mozilla Firefox.
 * @returns {Boolean} True if current browser is Mozilla Firefox, false otherwise.
 */
function isFirefox(range) 
{
    var match = getUserAgent().match(/(?:firefox|fxios)\/(\d+)/);

    return match !== null && compareVersion(match[1], range);
}

module.exports = isFirefox;