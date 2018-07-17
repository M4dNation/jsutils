const isNaN = require("./isNaN.js");
const isNull = require("./isNull.js");
const isBool = require("./isBool.js");
const isDate = require("./isDate.js");
const isArray = require("./isArray.js");
const isNumber = require("./isNumber.js");
const isRegExp = require("./isRegExp.js");
const isString = require("./isString.js");
const isElement = require("./isElement.js");
const isInfinite = require("./isInfinite.js");
const isFunction = require("./isFunction.js");
const isUndefined = require("./isUndefined.js");
const isArguments = require("./isArguments.js");
const isPlainObject = require("./isPlainObject.js");

/**
* Get the type of an object.
* @param    {Object}   obj      The object to evaluate
* @returns  {String}            The type of the object
*/
function type(obj) 
{
    const func = 
    {
        isNaN,
        isNull,
        isBool, 
        isDate, 
        isArray, 
        isNumber,
        isRegExp,
        isString, 
        isElement,
        isInfinite,
        isFunction,
        isUndefined,
        isArguments,
        isPlainObject
    };

    var types = "Date RegExp Element Arguments PlainObject Array Function String Bool NaN Infinite Number Null Undefined Object".split(" "), i;

    for (let i = 0; i < types.length; i++) 
    {
        if (func["is" + types[i]].call(this, obj)) 
        {
            return types[i].toLowerCase().replace(/plainobject/g, "object").replace(/infinite/g, "infinity");
        }
    }

    return false;
}

module.exports = type;