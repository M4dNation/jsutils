/**
* Evaluate if an object is an HTML element.
* @param    {Object}   obj          The object to evaluate
* @returns  {Boolean}               True if the object is an HTML, false otherwise
*/
function isElement(obj)
{
    return obj ? obj.nodeType === 1 : false;
}

module.exports = isElement;