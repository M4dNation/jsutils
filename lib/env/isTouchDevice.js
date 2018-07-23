const getSelf = require("./getSelf.js");
const getDocument = require("./getDocument.js");

/**
 * Evaluate if current device is a touch device.
 * @returns {Boolean} True if current device is a touch device, false otherwise.
 */
function isTouchDevice() 
{
    let env = getSelf(), d = getDocument();

    return !!d && ('ontouchstart' in env || ('DocumentTouch' in env && d instanceof DocumentTouch));
}

module.exports = isTouchDevice;