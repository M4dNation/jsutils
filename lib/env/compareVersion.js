/**
 * Compare number version of given environment, internal use only.
 * @param   {String}   version      The actual version of the environment
 * @param   {Number}   range        The reference version to compare with
 * @returns {Boolean}               True if provided version match actual version of given environment, false otherwise
 */
function compareVersion(version, range) 
{
    var comparator =
    {
        '<': function (a, b) { return a < b; },
        '<=': function (a, b) { return a <= b; },
        '>': function (a, b) { return a > b; },
        '>=': function (a, b) { return a >= b; }
    };

    var string = (range + '');
    var n = +(string.match(/\d+/) || NaN);
    var op = string.match(/^[<>]=?|/)[0];

    return comparator[op] ? comparator[op](version, n) : (version == n || n !== n);
}

module.exports = compareVersion;