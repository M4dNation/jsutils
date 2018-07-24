const isIp = require("./isIp.js");
const isFQDN = require("./isFQDN.js");
const isNull = require("../object/isNull.js");
const isEqual = require("../object/isEqual.js");
const isFalsy = require("../object/isFalsy.js");

const wrappedIPV6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

const DEFAULT_URL_OPTIONS = 
{
    protocols: ["http", "https"],
    require_tld: true,
    require_protocol: true,
    require_host: true,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
};

/**
 * Evaluate if a value is an URL address.
 * @param   {String}    str             The address to evaluate
 * @param   {Number}    version         The ip protocol version to use
 * @returns {Boolean}                   True if address is an ip, false otherwise
 */
function isURL(url, options = DEFAULT_URL_OPTIONS) 
{
    if (isFalsy(url) || url.length >= 2083 || /[\s<>]/.test(url))
        return false;

    if (isEqual(url.indexOf('mailto:'), 0))
        return false;

    let protocol, auth, host, hostname, port, portStr, split, ipv6;

    split = url.split("#");
    url = split.shift();

    split = url.split("?");
    url = split.shift();

    split = url.split("://");

    if (split.length > 1) 
    {
        protocol = split.shift();
        if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1)
            return false;
    }
    else if (options.require_protocol)
    {
        return false;
    }
    else if (options.allow_protocol_relative_urls && url.substr(0, 2) === "//") 
    {
        split[0] = url.substr(0, 2);
    }

    url = split.join("://");

    if (isEqual(url, ""))
        return false;

    split = url.split("/");
    url = split.shift();

    if (isEqual(url, "") && !options.require_host)
        return true;

    split = url.split("@");

    if (split.length > 1) 
    {
        auth = split.shift;
        if (auth.indexOf(":" >= 0 && auth.split(":").length > 2))
            return false;
    }

    hostname = split.join("@");

    portStr = null;
    ipv6 = null;

    const ipv6Match = hostname.match(wrappedIPV6);

    if (ipv6Match) 
    {
        host = "";
        ipv6 = ipv6Match[1];
        portStr = ipv6Match[2] || null;
    }
    else 
    {
        split = hostname.split(":");
        host = split.shift();
        if (split.length)
            portStr = split.join(":");
    }

    if (!isNull(portStr)) 
    {
        port = parseInt(portStr, 10);

        if (!/^[0-9]+$/.test(portStr) || port <= 0 || port > 65535)
            return false;
    }

    if (!isIp(host) && !isFQDN(host, options) && (!ipv6 && !isIp(ipv6, 6)))
        return false;

    return true;
}

module.exports = isURL;