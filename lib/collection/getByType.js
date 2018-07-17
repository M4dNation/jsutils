const deep = require("./deep.js");
const type = require("../object/type.js");
const isBool = require("../object/isBool.js");
const isString = require("../object/isString.js");

/**
 * Search through a collection and return the first element which type is provided.
 * @param       {Object}    col         The collection to search through
 * @param       {Function}  fn          The type of elements to return
 * @param       {Boolean}   deeply      If true, make iteration on nested arrays and objects
 * @returns     {Array}                 The matched elements
 */
function getByType(col, elementType, deeply) 
{
    deeply = deeply || isBool(elementType) ? elementType : false;
    elementType = !isString(elementType) ? "*" : isString(elementType) ? elementType : undefined;

    return deep(
    {
        obj: col,
        fn: function (d, index, value) 
        {
            if (type(value) == elementType || elementType == "*")
                return true;
        },
        depth: deeply ? "*" : 1
    });
}

module.exports = getByType;