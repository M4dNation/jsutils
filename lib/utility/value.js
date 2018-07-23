const isFunction = require("../object/isFunction.js");

/**
 * Execute or get value from entity.
 * @param   {Function || Object}    value   The value to execute or get
 * @returns {Unknown}                       The corresponding execution or value
 */
function value(value) 
{
    return isFunction(value) ? value() : value;
}

module.exports = value;