class Arr
{
    /**
     * at
     * This function is used in order to get the elements at an index or an array of indices.
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   index        The index or array of index of the .
     * @return  {Array} An array of all needed elements
     */
    static at(arr, index)
    {
        index = Utils.isArray(index) ? Utils.keys(index) : index;

    	return Utils.filter(arr, function(v, i)
    	{
      		if (i == index || Utils.contains(index, i.toString()))
      			return true;
    	});
    }

    /**
     * difference
     * This function is used in order to get the elements that are not in the second arguments.
     * @param   {Array}    arr          The array to evaluate.
     * @return  {Array} An array of all needed elements
     */
    static difference(arr)
    {
        var rest = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));

		return Utils.filter(Utils.uniq(arr), function(v)
		{
			return !Utils.inArray(rest, v);
		});
    }

    /**
     * first
     * This function is used in order to get the first n elements of an array.
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   n            The number of elements to get.
     * @return  {Array} An array of all needed elements
     */
    static first(arr, n)
    {
        return n ? Array.prototype.slice.call(arr, 0, n) : arr[0];
    }

    /**
     * take
     * This function is used in order to get the first n elements of an array (alias of first).
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   n            The number of elements to get.
     * @return  {Array} An array of all needed elements
     */
    static take(arr, n)
    {
        return Utils.first(arr, n);
    }

    static indexOf(arr, value, from, deep)
    {
        if (arr == null)
			return -1;

    	var deep = deep || Utils.isBool(from) ? from : false, from = Utils.isNumber(from) ? from : 0;

    	if (arr.indexOf && !deep)
    		return arr.indexOf(value, from);

    	for (var i = 0; i < arr.length; i++)
    	{
      		if (deep && Utils.isEqual(arr[i], value) && i >= from)
      			return i;
      		else if (arr[i] === value && i >= from)
      			return i;
    	}

    	return -1;
    }
};

module.exports = Arr;
