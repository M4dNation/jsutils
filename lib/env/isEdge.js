const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * Evaluate if current browser is Microsoft Edge.
 * @returns {Boolean} True if current browser is Microsoft Edge, false otherwise.
 */
function isEdge(range) 
{
    var match = getUserAgent().match(/edge\/(\d+)/);

    return match !== null && compareVersion(match[1], range);
}

module.exports = isEdge;
