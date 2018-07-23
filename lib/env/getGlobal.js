/**
 * Get the global object reference.
 * @returns  {Object}  The global object if server side (nodejs), false otherwise.
 */
function getGlobal() 
{
    if (typeof global !== "undefined")
        return global;

    return false;
}

module.exports = getGlobal;