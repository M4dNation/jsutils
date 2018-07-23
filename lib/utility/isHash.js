const isString = require("../object/isString.js");

const HASH_LENGTHS = 
{
    md5: 32,
    md4: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8,
};

/**
 * Evaluate if a value is an hash.
 * @param   {String}    hash            The hash to evaluate
 * @param   {String}    algorithm       The algorithm to evaluate
 * @returns {Boolean}                   True if value is a port, false otherwise
 */
function isHash(hash, algorithm) 
{
    if (!isString(hash))
        return false;

    const reg = new RegExp(`^[a-f0-9]{${HASH_LENGTHS[algorithm]}}$`);

    return reg.test(hash);
}

module.exports = isHash;