const find = require("./find.js");
const isBool = require("../object/isBool.js");

/**
* Search through a collection and return the first element which key/index passes a test.
* @param   {Object}         col         The collection to search through
* @param   {Function}       fn          The test to pass
* @param   {Object}         scope       The context to bound to
* @param   {Boolean}        deep        If true, make iteration on nested arrays and objects
* @returns {String|Number}              The first element which key/index passes the test
*/
function findKey(col, fn, scope, deep) 
{
    deep = deep || isBool(scope) ? scope : deep;

    return find(col, fn, scope || this, deep, "key");
}

module.exports = findKey;