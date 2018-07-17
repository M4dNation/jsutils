/**
* Evaluate if an object is a date.
* @param    {Object}   obj          The object to evaluate
* @returns  {Boolean}               True if the object is a date, false otherwise
*/
function isDate(obj) 
{
    return {}.toString.call(obj) === "[object Date]" || obj instanceof Date;
}

module.exports = isDate;