const getSelf = require("./getSelf.js");

/**
 * Get the document object reference.
 * @returns  {Object}  The document object if client side, false otherwise.
 */
function getDocument() 
{
    let env = getSelf();

    if (env)
        return env.document;

    return false;
}

module.exports = getDocument;