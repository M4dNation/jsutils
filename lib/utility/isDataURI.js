const validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
const validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
const validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

/**
 * Evaluate if a data is an URI.
 * @param   {String}    data    The data to evaluate
 * @returns {Boolean}           True if data is an URI, false otherwise
 */
function isDataURI(data) 
{
    data = data.split(",");

    if (data.length < 2)
        return false;

    const attributes = data.shift().trim().split(";");
    const schemeAndMediaType = attributes.shift();
    const mediaType = schemeAndMediaType.substr(5);

    if (schemeAndMediaType.substr(0, 5) !== 'data:')
        return false;

    if (mediaType !== '' && !validMediaType.test(mediaType))
        return false;

    for (let i = 0; i < attributes.length; i++) 
    {
        if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {}
        else if (!validAttribute.test(attributes[i])) return false;
    }

    for (let i = 0; i < data.length; i++) 
    {
        if (!validData.test(data[i]))
            return false;
    }

    return true;
}

module.exports = isDataURI;