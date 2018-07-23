const isNumber = require("../object/isNumber.js");

/**
 * Get a complete interval between two numbers with chosen step.
 * @param   {Number}    start        Start number
 * @param   {Number}    stop         Stop number
 * @param   {Number}    step         Step number
 * @returns {Array}                 An array containing every number between start and stop considering step.
 */
function range(start, stop, step) 
{
    var i = 0, ret = [], len = 0;

    start = (arguments.length == 1) ? 0 : start;
    stop = stop || start;
    step = step || 1;

    if (!isNumber(start) || !isNumber(stop) || !isNumber(step))
        return false;

    if (stop < start) 
    {
        let swap = stop;
        stop = start;
        start = swap;
    }

    len = Math.max(Math.ceil((stop - start) / step), 0);

    while (i <= len) 
    {
        ret[i++] = start;
        start += step;
    }

    return ret;
}

module.exports = range;