const getUserAgent = require("./getUserAgent.js");
const compareVersion = require("./compareVersion.js");

/**
 * Evaluate if current browser is Opera.
 * @returns {Boolean} True if current browser is Opera, false otherwise.
 */
function isOpera() 
{
    var match = getUserAgent().match(/(?:^opera.+?version|opr)\/(\d+)/);

    return match !== null && compareVersion(match[1], range);
}

module.export = isOpera;