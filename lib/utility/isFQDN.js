const isString = require("../object/isString.js");
const isEqual = require("../object/isEqual.js");

const DEFAUT_FQDN_OPTIONS =
{
    requireTld: true,
    allowUnderscores: false,
    allowTrailingDot: false
};

/**
 * Evaluate if a value is a Fully Qualified Domain Name.
 * @param   {String}    str     The domain to evaluate.
 * @returns {Boolean}           True if domain is a FQDN, false otherwise.
 */
function isFQDN(str, options = DEFAUT_FQDN_OPTIONS) 
{
    if (!isString(str))
        return false;

    if (options.allowTrailingDot && isEqual(str[str.length - 1], "."))
        str = str.substring(0, str.length - 1);

    const parts = str.split(".");

    for (let i = 0; i < parts.length; i++) 
    {
        if (parts[i].length > 63)
            return false;
    }

    if (options.requireTld) 
    {
        const tld = parts.pop();

        if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld))
            return false;

        if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld))
            return false;
    }

    for (let part, i = 0; i < parts.length; i++) 
    {
        part = parts[i];

        if (options.allowUnderscores)
            part = part.replace(/_g/, '');

        if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part))
            return false;

        if (/[\uff01-\uff5e]/.test(part))
            return false;

        if (isEqual(part[0], "-") || isEqual(part[part.length - 1], "-"))
            return false;
    }

    return true;
}

module.exports = isFQDN;