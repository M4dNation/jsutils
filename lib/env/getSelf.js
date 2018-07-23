/**
 * Get the self object reference.
 * @returns {Object}  The self object if client side, false otherwise.
 */
function getSelf() 
{
    if (typeof self !== "undefined")
        return self;

    return false;
}

module.exports = getSelf;