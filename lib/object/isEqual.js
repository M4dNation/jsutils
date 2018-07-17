const type = require("./type.js");
const isNaN = require("./isNaN.js");
const isArray = require("./isArray.js");
const len = require("../collection/len.js");
const isPlainObject = require("./isPlainObject.js");

/**
 * Evaluate if two objects are equal.
 * @param       {Object}   obj1     The first object to evaluate
 * @param       {Object}   obj2     The second object to evaluate
 * @returns     {Boolean}           True if the two objects are equal, false otherwise
 */
function isEqual(obj1, obj2) 
{
    var typeObj1 = type(obj1), typeObj2 = type(obj2);

    switch (true) 
    {
        // Not the same TYPE
        case typeObj1 !== typeObj2:
            return false;

        // NaNs
        case typeObj1 == "nan":
            return isNaN(obj1) && isNaN(obj2);

        // Primitives (types that will compare correctly with ===)
        case ((typeof obj1 != "object" && typeObj1 != "function") || typeObj1 == "null"):
            return obj1 === obj2;

        // Functions or Elements
        case typeObj1 == "function" || typeObj1 == "element":
            return obj1.constructor === obj2.constructor;

        // Arrays
        case isArray(obj1):
            if (!isArray(obj2) || !isEqual(obj1.length, obj2.length))
            {
                return false;
            }
            else 
            {
                for (let i = 0; i < obj1.length; i++) 
                {
                    if (!isEqual(obj1[i], obj2[i])) 
                    {
                        return false;
                    }
                }

                return true;
            }

        // Javascript Objects
        case isPlainObject(obj1):
            if (!isPlainObject(obj2) || !isEqual(len(obj1), len(obj2))) 
            {
                return false;
            }
            else 
            {
                for (let o in obj1) 
                {
                    if (!isEqual(obj1[o], obj2[o])) 
                    {
                        return false;
                    }
                }

                return true;
            }
    }
}

module.exports = isEqual;