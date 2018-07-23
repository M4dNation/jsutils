const isNumber = require("../object/isNumber.js");

/**
 * Evaluate if a value is a port.
 * @param   {Number}    value   The value to evaluate
 * @returns {Boolean}           True if value is a port, false otherwise
 */
function isPort(value) 
{
    value = parseInt(value, 10);
    if (!isNumber(value))
        return false;

    return value >= 0 && value <= 65535;
}

module.exports = isPort;