const delay = require("./delay.js");

/**
 * Call a function after the call stack is cleared.
 * @param   {Function}  fn      The function to call
 * @returns {Function}          The computed function
 */
function defer(fn) 
{
    return delay.call(this, fn, 0);
}

module.exports = defer;