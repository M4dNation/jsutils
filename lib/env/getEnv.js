/**
 * Get current running environment.
 * @returns {Object}    env    The current environment (self or window client side, global in nodejs server side).
 */
function getEnv() 
{
    if (typeof self !== "undefined")
        return self;
    else if (typeof window !== "undefined")
        return window;
    else if (typeof global !== "undefined")
        return global;

    throw new Error("unable to locate environment object");
}

module.exports = getEnv;