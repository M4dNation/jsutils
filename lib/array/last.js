/**
 * Get the last elements of an array.
 * @param   {Array}     arr     The array to evaluate
 * @param   {Number}    n       The number of elements to get
 * @returns {Array}             An array of all needed elements
 */
function last(arr, n) 
{
    return n ? Array.prototype.slice.call(arr, arr.length - n, arr.length) : arr[arr.length - 1];
}

module.exports = last;