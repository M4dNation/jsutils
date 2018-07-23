const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * Evaluate if current browser is PhantomJS.
 * @returns {Boolean}   True if current browser is PhantomJS, false otherwise.
 */
function isPhantom(range)
{
    var match = getUserAgent().match(/phantomjs\/(\d+)/);

    return match !== null && compareVersion(match[1], range);
}

module.exports = isPhantom;