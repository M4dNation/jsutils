/**
 * Get the window object reference.
 * @returns  {Window}  The window object if client side, false otherwise.
 */
function getWindowObject() 
{
    if (typeof window !== "undefined")
        return window;

    return false;
}

module.exports = getWindowObject;