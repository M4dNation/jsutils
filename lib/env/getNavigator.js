const getSelf = require("./getSelf.js");

/**
 * Get the navigator object reference.
 * @returns  {Object}  The navigator object if client side, false otherwise.
 */
function getNavigator() 
{
    let env = getSelf();

    if (env)
        return env.navigator;

    return false;
}

module.exports = getNavigator;