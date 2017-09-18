class ToolBox
{
    /**
     * add
     * This function is used in order to add an element to a collection.
     * @param   {Object}   col         The collection to add to.
     * @param   {Object}   key         The key to add to.
     * @param   {Object}   value       The value to add at key position.
     * @return  {Object} The collection with the added element.
     */
    static add(col, key, value)
    {
        var path = key.toString().split('.'), target = col;

    	for (var i = 0; i < path.length; i++)
    	{
      		if (Utils.has(target, path[i]) && i != path.length - 1)
      		{
        		target = target[path[i]];
      		}
      		else if (!Utils.has(target, path[i]) && i == path.length - 1)
      		{
        		target[path[i]] = value;
      		}
    	}

    	return col;
    }

    /**
     * all
     * This function is used in order to pass a test to all element.
     * @param   {Object}    col         The collection to test.
     * @param   {FSunction}  fn         The test to pass.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Boolean} True if all element pass the test, false otherwise.
     */
    static all(col, fn, scope, deep)
    {
        var ret = true, deep = Utils.isBool(scope) ? scope : deep;

    	Utils.deep(col, function(depth, index, value)
    	{
      		if (deep)
      		{
        		if (!Utils.isArray(value) && !Utils.isPlainObject(value))
        		{
          			if (!fn.call(!Utils.isBool(scope) ? (scope || this) : this, value, index))
          			    ret = false;
        		}
      		}
      		else
      		{
        		if (!fn.call(!Utils.isBool(scope) ? (scope || this) : this, value, index))
        			ret = false;
      		}
    	}, deep ? '*' : 1);

    	return ret;
    }

    /**
     * every
     * This function is used in order to pass a test to all element (alias of all).
     * @param   {Object}    col         The collection to test.
     * @param   {Function}  fn          The test to pass.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Boolean} True if all element pass the test, false otherwise.
     */
    static every(col, fn, scope, deep)
    {
        return Utils.all(col, fn, scope, deep);
    }

    /**
     * any
     * This function is used in order to pass a test to one element.
     * @param   {Object}    col         The collection to test.
     * @param   {Function}  fn          The test to pass.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Boolean} True if one element pass the test, false otherwise.
     */
    static any(col, fn, scope, deep)
    {
        var ret = false, deep = Utils.isBool(scope) ? scope : deep;

    	Utils.deep(col, function(depth, index, value)
    	{
      		if (fn.call(!Utils.isBool(scope) ? (scope || this) : this, value, index))
      		{
        		if (!ret)
        			ret = true;

        		ret = true;
      		}
    	}, deep ? '*' : 1);

    	return ret;
    }

    /**
     * some
     * This function is used in order to pass a test to one element (alias of any).
     * @param   {Object}    col         The collection to test.
     * @param   {Function}  fn          The test to pass.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Boolean} True if one element pass the test, false otherwise.
     */
    static some(col, fn, scope, deep)
    {
        return Utils.any(col, fn, scope, deep);
    }

    /**
     * average
     * This function is used in order to calculate the average of all numeric value in a collection.
     * @param   {Object}    col         The collection to process on.
     * @param   {Function}  fn          The function to apply before calculation.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Number} The average of all the numeric value in the collection.
     */
    static average(col, fn, deep)
    {
        var sumTotal = 0, deep = deep || Utils.isBool(fn) ? fn : false, iterator = Utils.isFunction(fn);

    	Utils.deep(col, function (depth, index, value, ref)
    	{
      		if (Utils.isNumber(value))
      			sumTotal += iterator ? fn.call(this, value, index, ref) : value;
    	}, deep ? "*" : 1);

    	return sumTotal / Utils.len(col, deep);
    }

    /**
     * clear
     * This function is used in order to clear a collection of all its element.
     * @param  {Object}     col The collection to clear.
     * @return {Object}     The cleared collection.
     */
    static clear(col)
    {
        if (Utils.isArray(col))
		{
			col.length = 0;
		}
   		else
   		{
   			Utils.each(col, function (value, index)
   			{
   				delete col[index];
   			});
   		}

    	return col;
    }

    /**
     * clone
     * This function is used in order to create a copy of a collection
     * By default, a shallow clone is returned (where array and objects are copied by reference).
     * @param   {Object}    col         The collection to copy.
     * @param   {Function}  fn          The function to apply after cloning.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Object} The copy of the collection.
     */
    static clone(col, fn, deep)
    {
        var deep = deep || Utils.isBool(fn) ? fn : false,
		iterator = Utils.isFunction(fn) ? fn : Utils.identity,
		ret = Utils.isArray(col) ? [] : {}, i;

    	for (var i in col)
    	{
      		if (typeof col[i] == 'object' && deep)
      			ret[i] = Utils.clone(col[i], fn, deep);
            else if (!(typeof col[i] == 'object'))
      			ret[i] = iterator.call(col, col[i]);
      		else
      			ret[i] = col[i];
    	}

    	return ret;
    }

    /**
     * compact
     * This function is used in order to create an array copy of a collection with falsy value removed.
     * @param   {Object}    col         The collection to copy.
     * @param   {Boolean}   all         If true, empty arrays or objects will be removed.
     * @return  {Array} The copy of the collection.
     */
    static compact(col, all)
    {
        return Utils.filter(col, function(v)
		{
      		if (all && !Utils.isFalsy(v) && !Utils.isEmpty(v))
      			return true;
      		else if (!all && !Utils.isFalsy(v))
      			return true;
    	});
    }

    /**
     * contains
     * This function is used in order to know if a collection contains a certain value.
     * @param   {Object}    col         The collection to copy.
     * @param   {Object}    value       The value to look for.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Boolean} True if the value is found, false otherwise.
     */
    static contains(col, value, deep)
    {
        return Utils.isEqual(Utils.find(col, function (v)
		{
      		return Utils.isEqual(v, value) ? true : false;
    	}, deep), value);
    }

    /**
     * inArray
     * This function is used in order to know if a collection contains a certain value (alias of contains).
     * @param   {Object}    col         The collection to copy.
     * @param   {Object}    value       The value to look for.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Boolean} True if the value is found, false otherwise.
     */
    static inArray(col, value, deep)
	{
		return Utils.contains(col, value, deep);
	}

    /**
     * count
     * This function is used in order to count how many element passes a test.
     * @param   {Object}    col         The collection to count.
     * @param   {Function}  fn          The test to pass.
     * @param   {Object}    scope       The context to bound to.
     * @return  {Number} Number of element in the collection which passed the test.
     */
    static count(col, fn, scope, deep)
    {
        var ret = 0, deep = Utils.isBool(scope) ? scope : deep;

    	Utils.deep(col, function(depth, index, value)
    	{
      		if (deep)
      		{
        		if (!Utils.isArray(value) && !Utils.isPlainObject(value))
        		{
          			if (fn.call(!Utils.isBool(scope) ? (scope || this) : this, value, index))
                    {
          				ret++;
                    }
        		}
      		}
      		else
      		{
        		if (fn.call(!Utils.isBool(scope) ? (scope || this) : this, value, index))
                {
        			ret++;
                }
      		}
    	}, deep ? '*' : 1);

    	return ret;
    }

    /**
     * countBy
     * This function is used in order to count how many element are in a collection.
     * The object returned uses the value as the property that references the number of values in that group.
     * @param   {Object}    col         The collection to count.
     * @param   {Function}  map         The function to apply.
     * @param   {Object}    scope       The context to bound to.
     * @return  {Object}  Grouped elements.
     */
    static countBy(col, map, scope)
    {
        return Utils.groupBy(col, map, scope || this, true);
    }

    static deep(col, fn, depth)
    {
        var obj = col.obj || col,
        fn = col.fn || fn,
        depth = col.depth || (depth || '*'),
        args = col.args || [],
        noArrays = col.noArrays || false,
        noObjects = col.noObjects || false,
        retType = col.retType || false,
        ret = col.ret || [];

    	for (var o in obj)
    	{
      		args.unshift(depth, o, obj[o], obj);

      		if (fn.apply(this, args))
      			ret.push(obj[o]);

      		if ((Utils.isPlainObject(obj[o]) && !noObjects) || (Utils.isArray(obj[o]) && !noArrays))
      		{
        		depth = depth == '*' ? '*' : depth - 1;
        		args.splice(0, 4);

        		if (depth > 0 || depth === '*')
        		{
          			Utils.deep({obj:obj[o], fn:fn, depth:depth, args:args, noArrays:noArrays, noObjects:noObjects, ret: ret});
        		}
      		}

      		args.splice(0, 4);
    	}

    	return retType ? obj : ret;
    }

    /**
     * each
     * This function is used in order to apply a function to each element of a collection.
     * Note: If the function returns false, the loop will break and the callback returns.
     * @param   {Object}    col         The collection to process on.
     * @param   {Function}  fn          The function to apply.
     * @param   {Object}    scope       The context to bound to.
     */
    static each(col, fn, scope)
    {
        if (col == null)
			return;

    	if (col.forEach)
    	{
      		col.forEach(fn, scope);
    	}
    	else if (col instanceof Array)
    	{
      		for (var i = 0; i < col.length; i++)
      		{
        		if (fn.call(scope || col[i], col[i], i, col) === false)
        			return;
      		}
    	}
    	else
    	{
      		for (var key in col)
      		{
        		if (Utils.has(col, key))
        		{
          			if (fn.call(scope || col[key], col[key], key, col) === false)
          				return;
        		}
      		}
    	}
    }

    /**
     * forEach
     * This function is used in order to apply a function to each element of a collection (alias of each).
     * Note: If the function returns false, the loop will break and the callback returns.
     * @param   {Object}    col         The collection to process on.
     * @param   {Function}  fn          The function to apply.
     * @param   {Object}    scope       The context to bound to.
     */
    static forEach(col, fn, scope)
    {
        return Utils.each(col, fn, scope);
    }

    /**
     * empty
     * This function is used in order to set all value of a collection to undefined.
     * @param   {Object}    col         The collection to copy.
     * @param   {Boolean}   all         If true, apply empty to nested arrays and objects as weel.
     * @return  {Object} The formated collection.
     */
    static empty(col, deep)
    {
        var ref = null;
    	Utils.deep(col, function(d, index, value, r)
    	{
      		if (deep)
      		{
        		if (ref == null)
        			ref = r;

        		if (Utils.isPlainObject(value) || Utils.isArray(value))
        			ref = value;
        		else
        			ref[index] = undefined;
      		}
      		else
      		{
        		col[index] = undefined;
     	 	}
    	}, deep ? '*' : 1);

    	return col;
    }

    /**
     * filter
     * This function is used in order to search through a collection and return those that passes a test.
     * @param   {Object}    col         The collection to search through.
     * @param   {Function}  fn          The test to pass.
     * @param   {Object}    scope       The context to bound to.
     * @return  {Array} An array of all matched elements.
     */
    static filter(col, fn, scope)
    {
        var ret = [];

    	if (col == null)
    		return ret;

    	if (col.filter)
    	{
      		return col.filter(fn, scope);
    	}
    	else if (col instanceof Array)
    	{
      		for (var i = 0; i < col.length; i++)
      		{
        		if (fn.call(scope || col[i], col[i], i, col))
        			ret[ret.length] = col[i];
      		}
    	}
    	else
    	{
      		for (var key in col)
      		{
        		if (Utils.has(col, key))
        		{
          			if (fn.call(scope || col[key], col[key], key, col))
          				ret[ret.length] = col[key];
        		}
      		}
    	}

    	return ret;
    }

    /**
     * find
     * This function is used in order to search through a collection and return the first element that passes a test.
     * @param   {Object}    col         The collection to search through.
     * @param   {Function}  fn          The test to pass.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @param   {String}    mode        If key mode, make test on a key instead of the value.
     * @return  {String|Number} The first element to pass the test
     */
    static find(col, fn, scope, deep, mode)
    {
        deep = Utils.isBool(scope) ? scope : deep;

        var res = Utils.deep(
   		{
   			obj: col,
   			fn: function(d,i,v)
   			{
      			if (fn.call(scope ? scope : this, mode === "key" ? i : v))
      				return true;
    		},
            depth: deep ? '*' : 1
    	});

    	return res.length >= 1 ? res[0] : undefined;
    }

    /**
     * findValue
     * This function is used in order to search through a collection and return the first element that passes a test (alias of find).
     * @param   {Object}    col         The collection to search through.
     * @param   {Function}  fn          The test to pass.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @param   {String}    mode        If key mode, make test on a key instead of the value.
     * @return  {String|Number} The first element to pass the test
     */
    static findValue(col, fn, scope, deep, mode)
    {
        return Utils.find(col, fn, scope, deep, mode);
    }

    /**
     * findKey
     * This function is used in order to search through a collection and return the first element which
     * key/index passes a test.
     * @param   {Object}    col         The collection to search through.
     * @param   {Function}  fn          The test to pass.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {String|Number} The first element which key/index passes the test
     */
    static findKey(col, fn, scope, deep)
    {
        deep = deep || Utils.isBool(scope) ? scope : deep;

    	return Utils.find(col, fn, scope || this, deep, "key");
    }

    /**
     * flatten
     * This function is used in order to flatten a collection with a specified depth.
     * @param   {Object}    col         The collection to flatten.
     * @param   {Number}    n           The depth to consider
     * @return  {Array} The flatten collection as an array
     */
    static flatten(col, n)
    {
        var ret = [], n = n || '*', nested;

    	Utils.deep(col, function (depth, index, elm)
    	{
     		nested = !Utils.isArray(elm) && !Utils.isPlainObject(elm)

      		if (depth == '*')
      		{
        		if (nested)
        			ret.push(elm);
      		}
      		else if (depth > 1)
      		{
        		if (nested)
        			ret.push(elm);
      		}
      		else
      		{
        		ret.push(elm);
      		}
    	}, n);

    	return ret;
    }

    /**
     * getByType
     * This function is used in order to search through a collection and return the first element which
     * type is provided.
     * @param   {Object}    col         The collection to search through.
     * @param   {Function}  fn          The type of elements to return.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Array} The matched elements
     */
    static getByType(col, type, deep)
    {
        deep = deep || Utils.isBool(type) ? type : false;
    	type = !Utils.isString(type) ? '*' : Utils.isString(type) ? type : undefined;

    	return Utils.deep(
    	{
    		obj: col,
    		fn: function(d, index, value)
    		{
      			if (Utils.type(value) == type || type == '*')
      				return true;
    		},
            depth: deep ? '*' : 1
    	});
    }

    /**
     * groupBy
     * This function is used in order to group collection values after running each through a function.
     * @param   {Object}    col         The collection to test.
     * @param   {Function}  map         The function used to group elements.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   count       If true, group by number of similar element in the collection.
     * @return  {Object} All groups of elements
     */
    static groupBy(col, map, scope, count)
    {
        count = count || Utils.isBool(scope) ? scope : false;

    	var res = {};

    	Utils.each(col, function (value, index)
    	{
      		var key = Utils.isString(map) ? value[map] : map.call(scope || this, value, index, col);
      		if (Utils.has(res, key))
      			res[key].push(value);
      		else
      			res[key] = [value];
    	});

    	if (count)
    	{
    		Utils.each(res, function (value, index)
    		{
    			res[index] = value.length;
    		});
		}

    	return res;
    }

    /**
     * groupsOf
     * This function is used in order to parse a collection into groups of N values.
     * @param   {Object}    col         The collection to group.
     * @param   {Number}    n           The number of values per group.
     * @param   {Object}    pad         If passed, use this value as a padding.
     * @return  {Array} All groups of elements
     */
    static groupsOf(col, n, pad)
    {
        var res = [], i = 1, key;
    	Utils.each(col, function (index, value)
    	{
      		if ((key in res) && i < n)
      		{
        		res[key].push(value);
        		i += 1;
      		}
      		else
      		{
       			key = Utils.len(res);
        		res[key] = [value];
        		i = 1;
      		}
    	});

    	if (pad)
    	{
      		Utils.each(res, function (value, index)
      		{
        		if (value.length < n)
        		{
        			for (i = value.length; i < n; i++)
        			{
        				res[index].push(pad);
        			}
        		}
      		});
    	}

    	return res;
    }

    /**
     * has
     * This function is used in order to know if a property/index in a collection exists.
     * @param   {Object}        col     The collection to search into.
     * @param   {String|Number} key     The key to look for.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Boolean} True if the property/index exists, false otherwise.
     */
    static has(col, key, deep)
    {
        return !deep && Object.hasOwnProperty ? hasOwnProperty.call(col, key) : Utils.findKey(col, function (index)
		{
      		return !!(key == index);
    	}, deep) ? true : false;
    }

    /**
     * keyExists
     * This function is used in order to know if a property/index in a collection exists.
     * @param   {Object}        col     The collection to search into.
     * @param   {String|Number} key     The key to look for.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Boolean} True if the key exists, false otherwise.
     */
    static keyExists(col, key, deep)
    {
        return Utils.has(col, key, deep);
    }

    /**
     * invert
     * This function is used in order to flip a collection's name/value or index/element pairs.
     * @param   {Object}        col     The collection to invert.
     * @return  {Object} The inverted collection
     */
    static invert(col)
    {
        var inverted = {}, i = -1, keys = Object.keys(col);

    	while (++i < keys.length)
    	{
    		inverted[col[keys[i]]] = keys[i];
    	}

    	return inverted;
    }

    /**
     * invoke
     * This function is used in order to call a function on each value of a collection.
     * @param   {Object}        col     The collection to apply the function to.
     * @param   {Function}      fn      The function to apply.
     * @param   {Array}         args    An array of all arguments the function to apply need.
     * @return  {Array|Object} The modified collection.
     */
    static invoke(col, fn, args)
    {
        var args = args || [], ret;

    	return Utils.map(col, function (value)
    	{
     		args.unshift(value);
      		ret = (Utils.isFunction(fn) ? fn : value[fn]).apply(value, args);
      		args.shift();

            return ret;
    	});
    }

    /**
     * isEmpty
     * This function is used in order to know if a collection is empty.
     * @param   {Object}        col     The collection to check.
     * @return  {Boolean} True if there is no value in the collection, false otherwise.
     */
    static isEmpty(col)
    {
        return ((Utils.isPlainObject(col) && Utils.len(col) === 0) || (Utils.isArray(col) && col.length === 0 ));
    }

    /**
     * isUnique
     * This function is used in order to know if a value is unique inside a collection.
     * @param   {Object}        col     The collection to check.
     * @param   {Object}        key     The key/index of a the value to verify.
     * @return  {Boolean} True if the value is unique, false otherwise.
     */
    static isUnique(col, key)
    {
        if (key in col)
		{
      		for (var o in col)
      		{
      			if (Utils.isEqual(col[key], col[o]) && o !== key.toString())
      				return false;
      		}
    	}

    	return true;
    }

    /**
     * keys
     * This function is used in order to get all the keys of a collection.
     * @param   {Object}        col     The collection to get the key from.
     * @param   {Boolean}       deep    If true, make iteration on nested arrays and objects.
     * @return  {Array} An array of all the keys inside the collection
     */
    static keys(col, deep)
    {
        if (!deep && Object.keys)
		{
      		return Object.keys(col);
    	}
    	else
    	{
      		var keys = [];

            for (var o in col)
      		{
      			keys.push(o);
      		}

      		return deep ? Utils.keys(Utils.paths(col)) : keys;
    	}
    }

    /**
     * least
     * This function is used in order to get the value with the least occurences in a collection.
     * @param   {Object}        col     The collection to get the value from.
     * @param   {Function}      fn      The function mapping the test
     * @param   {Boolean}       most    If true, return the value with the most occurences instead
     * @return  {String|Object} The first value the least represented in a collection (as a String if a number)
     */
    static least(col, fn, most)
    {
        var comparator, result, ret, leastValue;

    	if (Utils.isString(fn))
    	{
      		result = Utils.countBy(col, function (p)
      		{
      			return p[fn];
      		});

      		comparator = Utils.countBy(col, function (p)
      		{
      			return p[fn];
      		}, this, true);
    	}
    	else
    	{
      		result = Utils.countBy(col, fn || function (num) { return num; });
      		comparator = Utils.countBy(col, fn || function (num) { return num; }, this, true);
    	}

    	leastValue = most ? Utils.max(result) : Utils.min(result);
    	Utils.each(result, function (value, index)
    	{
      		if (leastValue == value)
      		{
        		ret = index;
        		return false;
      		}
    	});

    	return ret;
    }

    /**
     * len
     * This function is used in order to get the number of elements in a collection.
     * @param   {Object}        col     The collection to evaluate.
     * @param   {Boolean}       deep    If true, make iteration on nested arrays and objects.
     * @param   {Number}        count   Should not be provided, used for recursive calls
     * @return  {Number} The number of elements in the collection
     */
    static len(col, deep, count)
    {
        var count = count ? (count += Utils.keys(col).length) : Utils.keys(col).length;

    	if (deep)
    	{
      		for (var o in col)
      		{
        		if (Utils.isPlainObject(col[o]) || Utils.isArray(col[o]))
        		{
          			var ret = Utils.len(col[o], deep, count);

          			if (Utils.type(col[o]) === "array")
          				return ret - 1;
          			else if (Utils.type(col[o]) === "object")
          				return ret;
        		}
      		}
    	}

    	return count;
    }

    /**
     * map
     * This function is used in order to get a new array of values transformed by a function.
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Function}  fn          The function to apply.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Array} The new array of values
     */
    static map(col, fn, scope, deep)
    {
        deep = deep || Utils.isBool(scope) ? scope : false;
    	var ret = [];

    	Utils.each(deep ? Utils.flatten(col) : col, function(value, index, ref)
    	{
      		ret.push(fn.call(scope || this, value, index, ref));
    	});

    	return ret;
    }

    /**
     * max
     * This function is used in order to get the maximum value in a collection.
     * @param   {Object}    col         The collection to search through.
     * @param   {Function}  fn          The function to apply.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Number} The maximum value
     */
    static max(col, fn, deep)
    {
        var maxVals = [], deep = deep || Utils.isBool(fn) ? fn : false, iterator = Utils.isFunction(fn);

    	Utils.deep(col, function (depth, index, value, ref)
    	{
      		if (Utils.isNumber(value))
                maxVals.push(iterator ? fn.call(this, value, index, ref) : value);
    	}, deep ? "*" : 1);

    	return Math.max.apply(this, maxVals);
    }

    /**
     * min
     * This function is used in order to get the minimum value in a collection.
     * @param   {Object}    col         The collection to search through.
     * @param   {Function}  fn          The function to apply.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Number} The minimum value
     */
    static min(col, fn, deep)
    {
        var minVals = [], deep = deep || Utils.isBool(fn) ? fn : false, iterator = Utils.isFunction(fn);

    	Utils.deep(col, function(depth, index, value, ref)
    	{
      		if (Utils.isNumber(value))
      			minVals.push(iterator ? fn.call(this, value, index, ref) : value);
    	}, deep ? "*" : 1);

    	return Math.min.apply(this, minVals);
    }

    /**
     * most
     * This function is used in order to get the value with the most occurences in a collection.
     * @param   {Object}        col     The collection to get the value from.
     * @param   {Function}      fn      The function mapping the test
     * @return  {Array} The first value the most represented in a collection
     */
    static most(obj, fn)
    {
        return Utils.least(obj, fn, true);
    }

    /**
     * none
     * This function is used in order to know if none of the values in a collection passes a test.
     * @param   {Object}    col         The collection to test.
     * @param   {Function}  fn          The function to apply.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Booelan} True if none passes the test, false otherwise
     */
    static none(col, fn, scope, deep)
    {
        deep = deep || Utils.isBool(scope) ? scope : false;
    	var ret = true;

    	Utils.deep(col, function(d,i,v)
    	{
      		if (fn.call(scope ? scope : this, v, i))
      			ret = false;
    	}, deep ? '*' : 1);

		return ret;
    }

    /**
     * omit
     * This function is used in order to blacklist some values from a collection.
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Array}     list        The keys to look for.
     * @return  {Array} All values that did not match
     */
    static omit(col, list)
    {
        var props = Utils.isArray(list) ? list : [list];

    	return Utils.filter(col, function(value, index)
    	{
      		if (!(index in props) && !(Utils.inArray(props, index)))
      			return value;
    	});
    }

    /**
     * blacklist
     * This function is used in order to blacklist some values from a collection (alias for omit).
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Array}     list        The keys to look for.
     * @return  {Array} All values that did not match
     */
    static blacklist(col, list)
    {
        return Utils.omit(col, list);
    }

    /**
     * only
     * This function is used in order to whitelist some values from a collection.
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Array}     list        The keys to look for.
     * @return  {Array} All values that matched
     */
    static only(col, list)
    {
        var list = Utils.isString(list) ? list.split(" ") : list;

    	return Utils.filter(col, function (value, index)
    	{
      		if (Utils.inArray(list, index))
      			return true;
    	});
    }

    /**
     * whitelist
     * This function is used in order to whitelist some values from a collection.
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Array}     list        The keys to look for.
     * @return  {Array} All values that matched
     */
    static whitelist(col, list)
    {
        return Utils.only(col, list);
    }

    /**
     * paths
     * This function is used in order to get an object-literal containing unique "namespace paths".
     * For private use only inside Utils.
     */
    static paths(col, keys, noEnum, pathObj, lastKey, nextKey)
    {
        var o, keys = keys || false, pathObj = pathObj || {},
	    lastKey = lastKey || "", nextKey = nextKey || "",
	    props = noEnum ? Object.getOwnPropertyNames(col) : Utils.keys(col);

	    for (o = 0; o < props.length; o++)
	    {
	    	if (keys)
	      		pathObj[props[o]] = (nextKey + "." + lastKey + "." + props[o]).replace(/^[.]+/g, "");
	     	else
	      		pathObj[(nextKey + "." + lastKey + "." + props[o]).replace(/^[.]+/g, "")] = col[props[o]];

	    	if (Utils.isPlainObject(col[props[o]]) || Utils.isArray(col[props[o]]))
	      	{
	      		Utils.paths(col[props[o]], keys, noEnum, pathObj, props[o], nextKey + "." + lastKey);
	      	}
	    }

	    return pathObj;
    }

    /**
     * reject
     * This function is used in order to search through all values in a collection and return all but the values
     * that pass a test in a function.
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Function}  fn          The function to apply.
     * @param   {Object}    scope       The context to bound to.
     * @return  {Array} All but the values that passed the test
     */
    static reject(col, fn, scope)
    {
        return Utils.filter(col, function(v, i, r)
		{
      		return !fn.call(scope || this, v, i, r);
   		}, scope || this);
    }

    /**
     * replace
     * This function is used in order to apply a function to replace all elements of a collection.
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Function}  fn          The function to apply.
     * @param   {Object}    scope       The context to bound to.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Array|Object} The changed collection
     */
    static replace(col, fn, scope, deep)
    {
        var deep = Utils.isBool(scope) ? scope : deep, ref = col, scope = !Utils.isBool(scope) ? scope : this;

    	return Utils.deep(
        {
            obj:col,
            fn: function(d,i,v)
    	    {
          		if (deep)
          		{
            		if (Utils.isPlainObject(v) || Utils.isArray(v))
            			ref = v;
            		else
            			ref[i] = fn.call(scope, v);
          		}
          		else
          		{
            		ref[i] = fn.call(scope, v);
          		}
    	    },
            depth: deep ? '*' : 1,
            retType: true
        });
    }

    /**
     * sample
     * This function is used in order to search through all values in a collection and return a random sample.
     * @param   {Object}    col         The collection to get a sample from.
     * @param   {Number}    n           The number of element to get.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Array} A random sample of the collection
     */
    static sample(col, n, deep)
    {
        var ret = [], i;

    	for (i = n || 1; i > 0; i--)
    	{
    		ret.push(Utils.shuffle(deep ? Utils.flatten(col) : col)[0]);
    	}

    	return ret;
    }

    /**
     * set
     * This function is used in order to add a value to a collection.
     * @param   {Object}            col         The collection to set.
     * @param   {Number|String}     key         The key/index desired.
     * @param   {Object}            value       The value to insert.
     * @return  {Array|Object} The new collection
     */
    static set(col, key, value)
    {
        var path = key.toString().split('.'),  target = col;

    	for (var i = 0; i < path.length; i++)
    	{
      		if (Utils.has(target, path[i]) && i != path.length - 1)
      		{
        		target = target[path[i]];
      		}
      		else if (i == path.length-1)
      		{
        		target[path[i]] = value;
      		}
    	}

    	return col;
    }

    /**
     * setUndefined
     * This function is used in order to set all undefined value of a collection.
     * @param   {Object}    col         The collection to set.
     * @param   {Object}    value       The value to insert.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Array|Object} The new collection
     */
    static setUndefined(col, value, deep)
    {
        return Utils.deep({obj:col, fn:function (d, index, v, ref)
		{
      		if (Utils.isUndefined(v))
      			ref[index] = value;
    	}, depth: deep ? '*' : 1, retType: true});
    }

    /**
     * shuffle
     * This function is used in order to get a randomized copy of values in a collection.
     * @param  {Object} col The collection to shuffle
     * @return {Object} A randomized copy of the collection
     */
    static shuffle(col)
    {
        var ret, n, copy;
    	ret = Utils.isPlainObject(col) ? Utils.toArray(col) : col;

    	for (var i = ret.length - 1; i > 0; i--)
    	{
      		n = Math.floor(Math.random() * (i + 1));
      		copy = ret[i];
      		ret[i] = ret[n];
      		ret[n] = copy;
    	}

    	return ret;
    }

    /**
     * size
     * This function is used in order to get the number of elements in a collection that are not falsy.
     * @param   {Object}        col     The collection to evaluate.
     * @param   {Boolean}       deep    If true, make iteration on nested arrays and objects.
     * @param   {Number}        count   Should not be provided, used for recursive calls
     * @return  {Number} The number of elements in the collection that are not falsy
     */
    static size(col, deep, count)
    {
        count = count ? count : 0;
    	Utils.each(Utils.values(col), function (value)
    	{
    		if (!Utils.isFalsy(value))
    			count += 1;
    	});

    	if (deep)
    	{
      		for (var o in col)
      		{
        		if (Utils.isPlainObject(col[o]) || Utils.isArray(col[o]))
        		{
          			var ret = Utils.size(col[o], deep, count);

          			if (Utils.type(col[o]) === "array")
          				return ret - 1;
          			else if (Utils.type(col[o]) === "object")
          				return ret;
        		}
      		}
    	}

    	return count;
    }

    /**
     * sortBy
     * This function is used in order to get an array of sorted elements of a collection.
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Function}  fn          The function to apply in order to sort the elements.
     * @param   {Object}    scope       The context to bound to.
     * @return  {Array|Object} The changed collection
     */
    static sortBy(col, fn, scope)
    {
        var iterator = Utils.isFunction(fn) ? fn : function(v, i, r)
		{
	    	var type = typeof r[i];
	    	if (type == 'array' || type == 'object')
	    		return Utils.resolve(r[i], fn);
	      	else
	      		return v[fn];
	    };

	    return Utils.pluck(Utils.map(col, function (value, index, list)
	    {
	    	return { value : value, index : index,criteria : iterator.call(scope || this, value, index, list)};
	    }).sort(function (left, right)
	    {
	    	var x = left.criteria;
	    	var y = right.criteria;

	    	if (x !== y)
	    	{
	        	if (x > y || x === void 0)
	        		return 1;
	        	if (x < y || y === void 0)
	        		return -1;
	      	}
	      	return left.index < right.index ? -1 : 1;
	    }), 'value');
    }

    /**
     * sum
     * This function is used in order to get the sum of all numerics value inside a collection.
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Function}  fn          The function to apply.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Number} The sum of all numerical values inside the collection
     */
    static sum(col, fn, deep)
    {
        var deep = deep || Utils.isBool(fn) ? fn : false,
        iterator = Utils.isFunction(fn) ? fn : Utils.identity,
        ret = 0;

    	Utils.deep(col, function (depth, index, value)
    	{
      		if (Utils.isNumber(value))
      			ret += iterator.call(col, value);
    	}, deep ? "*" : 1);

    	return ret;
    }

    /**
     * values
     * This function is used in order to get an array of all values inside a collection.
     * @param   {Object}    col         The collection to evaluate.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Array} An array of all values inside the collection
     */
    static values(col, deep)
    {
        var vals = [];

        for (var o in col)
        {
            vals.push(col[o]);
        }

        return deep ? Utils.values(Utils.paths(col)) : vals;
    }

    /**
     * where
     * This function is used in order to get all name/value pairs in list containing
     * the name/value pairs in matches.
     * @param   {Object}   col          The collection to evaluate.
     * @param   {Object}   matches      The matching values.
     * @param   {String}   find         The algorithm to use (find if true or filter otherwise)
     * @return  {Array} An array of all matching collection elements
     */
    static where(col, matches, find)
    {
        return Utils[find ? 'find' : 'filter'](col, function (value)
		{
      		for (var key in matches)
      		{
      			if (matches[key] !== value[key])
      				return false;
      		}

      		return true;
    	});
    }

    /**
     * whereFirst
     * This function is used in order to get the first name/value pairs in list containing
     * the name/value pairs in matches.
     * @param   {Object}   col         The collection to evaluate.
     * @param   {Object}   matches      The matching values.
     * @return  {Object} The first matching collection element
     */
    static whereFirst(col, matches)
    {
        return Utils.where(col, matches, true);
    }

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
}

module.exports = {
    Utils: Utils,
};
