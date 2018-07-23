const isEqual = require("../object/isEqual.js");
const isFalsy = require("../object/isFalsy.js");

const IPV6 = /^[0-9A-F]{1,4}$/i;
const IPV4 = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

/**
 * Evaluate if a value is an ip address.
 * @param   {String}    str             The address to evaluate
 * @param   {Number}    version         The ip protocol version to use
 * @returns {Boolean}                   True if address is an ip, false otherwise
 */
function isIp(str, version) 
{
    if (isFalsy(version))
        return isIp(str, 4) || isIp(str, 6);

    if (isEqual(version, 4)) 
    {
        if (!IPV4.test(str))
            return false;

        const parts = str.split(".").sort((a, b) => a - b);
        return parts[3] <= 255;
    }
    else if (isEqual(version, 6)) 
    {
        const blocks = str.split(":");
        let foundOmissionBlock = false;
        const foundIPV4TransitionBlock = isIp(blocks[blocks.length - 1], 4);
        const expectedNumberOfBlocks = foundIPV4TransitionBlock ? 7 : 8;

        if (blocks.length > expectedNumberOfBlocks)
            return false;

        if (isEqual(str, "::")) 
        {
            return true;
        }
        else if (str.substr(0, 2) === "::") 
        {
            blocks.shift();
            blocks.shift();
            foundOmissionBlock = true;
        }
        else if (isEqual(str.substr(str.length - 2), "::")) 
        {
            blocks.pop();
            blocks.pop();
            foundOmissionBlock = true;
        }

        for (let i = 0; i < blocks.length; ++i) 
        {
            if (isEqual(blocks[i], "") && i > 0 && i < blocks.length - 1) 
            {
                if (foundOmissionBlock)
                    return false;

                foundOmissionBlock = true;
            }
            else if (!IPV6.test(blocks[i])) 
            {
                return false;
            }
        }

        if (foundOmissionBlock)
            return blocks.length >= 1;

        return blocks.length === expectedNumberOfBlocks;
    }

    return false;
}

module.exports = isIp;