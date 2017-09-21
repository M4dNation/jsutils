class Collection
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
      		if (Collection.has(target, path[i]) && i != path.length - 1)
      		{
        		target = target[path[i]];
      		}
      		else if (!Collection.has(target, path[i]) && i == path.length - 1)
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
        var ret = true, deep = Obj.isBool(scope) ? scope : deep;

    	Collection.deep(col, function(depth, index, value)
    	{
      		if (deep)
      		{
        		if (!Obj.isArray(value) && !Obj.isPlainObject(value))
        		{
          			if (!fn.call(!Obj.isBool(scope) ? (scope || this) : this, value, index))
          			    ret = false;
        		}
      		}
      		else
      		{
        		if (!fn.call(!Obj.isBool(scope) ? (scope || this) : this, value, index))
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
        return Collection.all(col, fn, scope, deep);
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
        var ret = false, deep = Obj.isBool(scope) ? scope : deep;

    	Collection.deep(col, function(depth, index, value)
    	{
      		if (fn.call(!Obj.isBool(scope) ? (scope || this) : this, value, index))
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
        return Collection.any(col, fn, scope, deep);
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
        var sumTotal = 0, deep = deep || Obj.isBool(fn) ? fn : false, iterator = Obj.isFunction(fn);

    	Collection.deep(col, function (depth, index, value, ref)
    	{
      		if (Obj.isNumber(value))
      			sumTotal += iterator ? fn.call(this, value, index, ref) : value;
    	}, deep ? "*" : 1);

    	return sumTotal / Collection.len(col, deep);
    }

    /**
     * clear
     * This function is used in order to clear a collection of all its element.
     * @param  {Object}     col The collection to clear.
     * @return {Object}     The cleared collection.
     */
    static clear(col)
    {
        if (Obj.isArray(col))
		{
			col.length = 0;
		}
   		else
   		{
   			Collection.each(col, function (value, index)
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
        var deep = deep || Obj.isBool(fn) ? fn : false,
		iterator = Obj.isFunction(fn) ? fn : Utility.identity,
		ret = Obj.isArray(col) ? [] : {}, i;

    	for (var i in col)
    	{
      		if (typeof col[i] == 'object' && deep)
      			ret[i] = Collection.clone(col[i], fn, deep);
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
        return Collection.filter(col, function(v)
		{
      		if (all && !Obj.isFalsy(v) && !Collection.isEmpty(v))
      			return true;
      		else if (!all && !Obj.isFalsy(v))
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
        return Obj.isEqual(Collection.find(col, function (v)
		{
      		return Obj.isEqual(v, value) ? true : false;
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
		return Collection.contains(col, value, deep);
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
        var ret = 0, deep = Obj.isBool(scope) ? scope : deep;

    	Collection.deep(col, function(depth, index, value)
    	{
      		if (deep)
      		{
        		if (!Obj.isArray(value) && !Obj.isPlainObject(value))
        		{
          			if (fn.call(!Obj.isBool(scope) ? (scope || this) : this, value, index))
                    {
          				ret++;
                    }
        		}
      		}
      		else
      		{
        		if (fn.call(!Obj.isBool(scope) ? (scope || this) : this, value, index))
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
        return Collection.groupBy(col, map, scope || this, true);
    }

    /**
     * deep
     * This function is used in order to perform a deep iteration on the target collection.
     * @param   {Object}    col         The collection to count.
     * @param   {Function}  fn          The function to apply.
     * @param   {Object}    depth       The depth needed
     * @return  {Array}  An array of values that have passed the condition established by the function to apply.
     */
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

      		if ((Obj.isPlainObject(obj[o]) && !noObjects) || (Obj.isArray(obj[o]) && !noArrays))
      		{
        		depth = depth == '*' ? '*' : depth - 1;
        		args.splice(0, 4);

        		if (depth > 0 || depth === '*')
        		{
          			Collection.deep({obj:obj[o], fn:fn, depth:depth, args:args, noArrays:noArrays, noObjects:noObjects, ret: ret});
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
        		if (Collection.has(col, key))
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
        return Collection.each(col, fn, scope);
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
    	Collection.deep(col, function(d, index, value, r)
    	{
      		if (deep)
      		{
        		if (ref == null)
        			ref = r;

        		if (Obj.isPlainObject(value) || Obj.isArray(value))
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
        		if (Collection.has(col, key))
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
        deep = Obj.isBool(scope) ? scope : deep;

        var res = Collection.deep(
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
        return Collection.find(col, fn, scope, deep, mode);
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
        deep = deep || Obj.isBool(scope) ? scope : deep;

    	return Collection.find(col, fn, scope || this, deep, "key");
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

    	Collection.deep(col, function (depth, index, elm)
    	{
     		nested = !Obj.isArray(elm) && !Obj.isPlainObject(elm)

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
        deep = deep || Obj.isBool(type) ? type : false;
    	type = !Obj.isString(type) ? '*' : Obj.isString(type) ? type : undefined;

    	return Collection.deep(
    	{
    		obj: col,
    		fn: function(d, index, value)
    		{
      			if (Obj.type(value) == type || type == '*')
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
        count = count || Obj.isBool(scope) ? scope : false;

    	var res = {};

    	Collection.each(col, function (value, index)
    	{
      		var key = Obj.isString(map) ? value[map] : map.call(scope || this, value, index, col);
      		if (Collection.has(res, key))
      			res[key].push(value);
      		else
      			res[key] = [value];
    	});

    	if (count)
    	{
    		Collection.each(res, function (value, index)
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
    	Collection.each(col, function (index, value)
    	{
      		if ((key in res) && i < n)
      		{
        		res[key].push(value);
        		i += 1;
      		}
      		else
      		{
       			key = Collection.len(res);
        		res[key] = [value];
        		i = 1;
      		}
    	});

    	if (pad)
    	{
      		Collection.each(res, function (value, index)
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
        return !deep && Object.hasOwnProperty ? hasOwnProperty.call(col, key) : Collection.findKey(col, function (index)
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
        return Collection.has(col, key, deep);
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

    	return Collection.map(col, function (value)
    	{
     		args.unshift(value);
      		ret = (Obj.isFunction(fn) ? fn : value[fn]).apply(value, args);
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
        return ((Obj.isPlainObject(col) && Collection.len(col) === 0) || (Obj.isArray(col) && col.length === 0 ));
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
      			if (Obj.isEqual(col[key], col[o]) && o !== key.toString())
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

      		return deep ? Collection.keys(Collection.paths(col)) : keys;
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

    	if (Obj.isString(fn))
    	{
      		result = Collection.countBy(col, function (p)
      		{
      			return p[fn];
      		});

      		comparator = Collection.countBy(col, function (p)
      		{
      			return p[fn];
      		}, this, true);
    	}
    	else
    	{
      		result = Collection.countBy(col, fn || function (num) { return num; });
      		comparator = Collection.countBy(col, fn || function (num) { return num; }, this, true);
    	}

    	leastValue = most ? Collection.max(result) : Collection.min(result);
    	Collection.each(result, function (value, index)
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
        var count = count ? (count += Collection.keys(col).length) : Collection.keys(col).length;

    	if (deep)
    	{
      		for (var o in col)
      		{
        		if (Obj.isPlainObject(col[o]) || Obj.isArray(col[o]))
        		{
          			var ret = Collection.len(col[o], deep, count);

          			if (Obj.type(col[o]) === "array")
          				return ret - 1;
          			else if (Obj.type(col[o]) === "object")
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
        deep = deep || Obj.isBool(scope) ? scope : false;
    	var ret = [];

    	Collection.each(deep ? Collection.flatten(col) : col, function(value, index, ref)
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
        var maxVals = [], deep = deep || Obj.isBool(fn) ? fn : false, iterator = Obj.isFunction(fn);

    	Collection.deep(col, function (depth, index, value, ref)
    	{
      		if (Obj.isNumber(value))
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
        var minVals = [], deep = deep || Obj.isBool(fn) ? fn : false, iterator = Obj.isFunction(fn);

    	Collection.deep(col, function(depth, index, value, ref)
    	{
      		if (Obj.isNumber(value))
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
        return Collection.least(obj, fn, true);
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
        deep = deep || Obj.isBool(scope) ? scope : false;
    	var ret = true;

    	Collection.deep(col, function(d,i,v)
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
        var props = Obj.isArray(list) ? list : [list];

    	return Collection.filter(col, function(value, index)
    	{
      		if (!(index in props) && !(Collection.inArray(props, index)))
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
        return Collection.omit(col, list);
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
        var list = Obj.isString(list) ? list.split(" ") : list;

    	return Collection.filter(col, function (value, index)
    	{
      		if (Collection.inArray(list, index))
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
        return Collection.only(col, list);
    }

    /**
     * paths
     * This function is used in order to get an object-literal containing unique "namespace paths".
     * For private use only inside Collection.
     */
    static paths(col, keys, noEnum, pathObj, lastKey, nextKey)
    {
        var o, keys = keys || false, pathObj = pathObj || {},
	    lastKey = lastKey || "", nextKey = nextKey || "",
	    props = noEnum ? Object.getOwnPropertyNames(col) : Collection.keys(col);

	    for (o = 0; o < props.length; o++)
	    {
	    	if (keys)
	      		pathObj[props[o]] = (nextKey + "." + lastKey + "." + props[o]).replace(/^[.]+/g, "");
	     	else
	      		pathObj[(nextKey + "." + lastKey + "." + props[o]).replace(/^[.]+/g, "")] = col[props[o]];

	    	if (Obj.isPlainObject(col[props[o]]) || Obj.isArray(col[props[o]]))
	      	{
	      		Collection.paths(col[props[o]], keys, noEnum, pathObj, props[o], nextKey + "." + lastKey);
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
        return Collection.filter(col, function(v, i, r)
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
        var deep = Obj.isBool(scope) ? scope : deep, ref = col, scope = !Obj.isBool(scope) ? scope : this;

    	return Collection.deep(
        {
            obj:col,
            fn: function(d,i,v)
    	    {
          		if (deep)
          		{
            		if (Obj.isPlainObject(v) || Obj.isArray(v))
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
    		ret.push(Collection.shuffle(deep ? Collection.flatten(col) : col)[0]);
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
      		if (Collection.has(target, path[i]) && i != path.length - 1)
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
        return Collection.deep({obj:col, fn:function (d, index, v, ref)
		{
      		if (Obj.isUndefined(v))
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
    	ret = Obj.isPlainObject(col) ? Obj.toArray(col) : col;

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
    	Collection.each(Collection.values(col), function (value)
    	{
    		if (!Obj.isFalsy(value))
    			count += 1;
    	});

    	if (deep)
    	{
      		for (var o in col)
      		{
        		if (Obj.isPlainObject(col[o]) || Obj.isArray(col[o]))
        		{
          			var ret = Collection.size(col[o], deep, count);

          			if (Obj.type(col[o]) === "array")
          				return ret - 1;
          			else if (Obj.type(col[o]) === "object")
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
        var iterator = Obj.isFunction(fn) ? fn : function(v, i, r)
		{
	    	var type = typeof r[i];
	    	if (type == 'array' || type == 'object')
	    		return Obj.resolve(r[i], fn);
	      	else
	      		return v[fn];
	    };

	    return Obj.pluck(Collection.map(col, function (value, index, list)
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
        var deep = deep || Obj.isBool(fn) ? fn : false,
        iterator = Obj.isFunction(fn) ? fn : Utility.identity,
        ret = 0;

    	Collection.deep(col, function (depth, index, value)
    	{
      		if (Obj.isNumber(value))
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

        return deep ? Collection.values(Collection.paths(col)) : vals;
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
        return Collection[find ? 'find' : 'filter'](col, function (value)
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
        return Collection.where(col, matches, true);
    }
};

class Obj
{
    /**
     * toArray
     * This function is used in order to transform an object in an array.
     * @return  {Array} The transformed object as an array
     */
    static toArray()
    {
        var ret = [];

    	if (arguments.length > 1)
    	{
      		for (var i = 0; i < arguments.length; i++)
      		{
        		Collection.each(arguments[i], function (value)
        		{
        			ret.push(value);
        		});
      		}
    	}
    	else
    	{
      		Collection.each(arguments[0], function (value)
      		{
      			ret.push(value);
      		});
    	}

    	return ret;
    }

    /**
     * defaults
     * This function is used in order to set default values in an object.
     * @param   {Object} obj        The object to evaluate
     * @param   {Object} defaults   The defaults value as an object
     * @return  {Object} The transformed object
     */
    static defaults(obj, defaults)
    {
        Collection.each(defaults, function (value, index)
		{
      		if (!(index in obj))
      		{
        		obj[index] = value;
      		}
      		else
      		{
        		if (obj[index] === null || obj[index] === undefined)
        			obj[index] = value;
      		}
    	});

    	return obj;
    }

    /**
     * merge
     * This function is used in order to merge multiple objects in one.
     * @return  {Object} The transformed object
     */
    static merge()
    {
        var keys = [], objs, target, obj, copy, key, i, deep;

    	// Collect potential objects to merge
    	objs = Collection.filter(Obj.toArray(arguments), function (value)
    	{
      		if (Obj.isBool(value))
      			deep = value;
      		if (Obj.isPlainObject(value))
      			return value;
    	});

    	// Shift target off of the `objs` array
    	target = objs.shift();

    	// Perform deep iteration on target
    	if (deep)
    	{
			// Build property reference used to prevent never ending loops
      		Collection.each(objs, function (value)
      		{
        		keys.push(Collection.keys(value));
        		keys = Collection.flatten(keys);
      		});

			// Add properties to all nested objects
      		Collection.deep(target, function (depth, index, obj)
      		{
        		if (Collection.indexOf(keys, index) === -1)
        		{
          			for (i = 0; i < objs.length; i++)
          			{
            			for (key in objs[i])
            			{
              				if (Obj.isPlainObject(obj))
              				{
                				copy = objs[i][key];
                				obj[key] = copy;
              				}
            			}
          			}
        		}
      		}, "*");
    	}

    	// Merge first level properties
    	for (i = 0; i < objs.length; i++)
    	{
      		if (( obj = objs[i] ) !== null)
      		{
        		for (key in obj)
        		{
          			copy = obj[key];

          			if (target === copy)
          				continue;

          			target[key] = copy;
        		}
      		}
    	}

    	return target;
    }

    /**
     * get
     * This function is used in order to get the value at specified key.
     * @param   {Object} obj        The object to evaluate
     * @param   {Object} key        The key to get the value from
     * @return  {Object} The needed value (can be a nested array or a nested object)
     */
    static get(obj, key)
    {
        return Collection.deep(obj, function(d,i) { if (key == i) return true; })[0];
    }

    /**
     * howDeep
     * This function is used in order to get the depth level of the specified key (first level is 1).
     * @param   {Object} obj        The object to evaluate
     * @param   {Object} key        The key to look for
     * @return  {Number} The depth level
     */
    static howDeep(obj, key)
    {
        var paths = Collection.paths(obj, true);
    	if (key && (key in paths))
    	{
      		return paths[key].split(".").length;
    	}
    	else
    	{
      		var objs = Collection.getByType(obj, '*', true);
      		for (var o in objs)
      		{
        		if (Obj.isEqual(obj, objs[o]))
                {
                    return Obj.howDeep(obj, Collection.keys(objs[o])[0]);
                }
      		}
    	}
    }

    /**
     * isArguments
     * This function is used in order to know if an object is a function argument object.
     * @param   {Object}   obj          The object to evaluate.
     * @return  {Boolean}  True if the object is a function argument object, false otherwise.
     */
    static isArguments(obj)
    {
        return {}.toString.call(obj) === "[object Arguments]";
    }

    /**
     * isArray
     * This function is used in order to know if an object is an array.
     * @param   {Object}   obj          The object to evaluate.
     * @return  {Boolean}  True if the object is an array, false otherwise.
     */
    static isArray(obj)
    {
        return {}.toString.call(obj) === "[object Array]";
    }

    /**
     * isBool
     * This function is used in order to know if an object is a boolean.
     * @param   {Object}   obj          The object to evaluate.
     * @return  {Boolean}  True if the object is a boolean, false otherwise.
     */
    static isBool(obj)
    {
        return {}.toString.call(obj) === "[object Boolean]";
    }

    /**
     * isDate
     * This function is used in order to know if an object is a date.
     * @param   {Object}   obj          The object to evaluate.
     * @return  {Boolean}  True if the object is a date, false otherwise.
     */
    static isDate(obj)
    {
        return {}.toString.call(obj) === "[object Date]" || obj instanceof Date;
    }

    /**
     * isElement
     * This function is used in order to know if an object is an HTML element.
     * @param   {Object}   obj          The object to evaluate.
     * @return  {Boolean}  True if the object is an HTML, false otherwise.
     */
    static isElement(obj)
    {
        return obj ? obj.nodeType === 1 : false;
    }

    /**
     * isEqual
     * This function is used in order to know if two objects are equal.
     * @param   {Object}   obj1        The first object to evaluate.
     * @param   {Object}   obj2        The second object to evaluate.
     * @return  {Boolean}  True if the two objects are equal, false otherwise.
     */
    static isEqual(obj1, obj2)
    {
        var type = Obj.type(obj1), o, eltObj1, eltObj2;

	    switch (true)
	    {
	      	// Not the same TYPE
	    	case type != Obj.type(obj2) :
	        	return false;

	    	// NaNs
	      	case type == 'nan' :
	        	return Obj.isNaN(obj1) && Obj.isNaN(obj2);

	      	// Primitives (types that will compare correctly with ===)
	      	case ((typeof obj1 != 'object' && type != 'function') || type == 'null') :
                return obj1 === obj2;

	      	// Functions or Elements
	      	case type == 'function' || type == 'element' :
	        	return obj1.constructor === obj2.constructor;

            // Arrays
            case Obj.isArray(obj1) :
                if (!Obj.isArray(obj2) || !Obj.isEqual(obj1.length, obj2.length))
                {
                    return false;
                }
                else
                {
                    for (let i = 0; i < obj1.length; i++)
                    {
                        if (!Obj.isEqual(obj1[i], obj2[i]))
                        {
                            return false;
                        }
                    }

                    return true;
                }

            // Javascript Objects
            case Obj.isPlainObject(obj1):
                if (!Obj.isPlainObject(obj2) || !Obj.isEqual(Collection.len(obj1), Collection.len(obj2)))
                {
                    return false;
                }
                else
                {
                    for (let o in obj1)
                    {
                        if (!Obj.isEqual(obj1[o], obj2[o]))
                        {
                            return false;
                        }
                    }

                    return true;
                }
	    }
    }

    /**
     * isFalsy
     * This function is used in order to know if an object is a falsy value or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is falsy, false otherwise.
     */
    static isFalsy(obj)
    {
        return (Obj.isUndefined(obj) || Obj.isNull(obj) || Obj.isNaN(obj) || obj === "" || obj === 0 || (Obj.isBool(obj) && Boolean(obj) === false));
    }

    /**
     * isTruthy
     * This function is used in order to know if an object is a truthy value or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is truthy, false otherwise.
     */
    static isTruthy(obj)
    {
        return !Obj.isFalsy(obj);
    }

    /**
     * isFalse
     * This function is used in order to know if an object is the false boolean or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is the false boolean, false otherwise.
     */
    static isFalse(obj)
    {
        return (Obj.isBool(obj) && Obj.isEqual(obj, false));
    }

    /**
     * isTrue
     * This function is used in order to know if an object is the true boolean or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is the true boolean, false otherwise.
     */
    static isTrue(obj)
    {
        return (Obj.isBool(obj) && Obj.isEqual(obj, true));
    }

    /**
     * isInfinite
     * This function is used in order to know if an object is infinite or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is the number infinity, false otherwise.
     */
    static isInfinite(obj)
    {
        return obj === Infinity || obj === -Infinity;
    }

    /**
     * isFunction
     * This function is used in order to know if an object is a function or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is a function, false otherwise.
     */
    static isFunction(obj)
    {
        return {}.toString.call(obj) === "[object Function]";
    }

    /**
     * isNaN
     * This function is used in order to know if an object is NaN or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is NaN, false otherwise.
     */
    static isNaN(obj)
    {
        return Obj.isNumber(obj) && obj !== obj;
    }

    /**
     * isNull
     * This function is used in order to know if an object is null or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is null, false otherwise.
     */
    static isNull(obj)
    {
        return {}.toString.call(obj) === "[object Null]";
    }

    /**
     * isNumber
     * This function is used in order to know if an object is a number or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is a number, false otherwise.
     */
    static isNumber(obj)
    {
        return {}.toString.call(obj) === "[object Number]";
    }

    /**
     * isObject
     * This function is used in order to know if an object is an object or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is an object, false otherwise.
     */
    static isObject(obj)
    {
        return typeof obj === "object";
    }

    /**
     * isPlainObject
     * This function is used in order to know if an object is a plain object or not.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is a plain object, false otherwise.
     */
    static isPlainObject(obj)
    {
        return typeof obj === "object" && {}.toString.call(obj) === "[object Object]";
    }

    /**
     * isRegExp
     * This function is used in order to know if an object is a regular expression.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is a regular expression, false otherwise.
     */
    static isRegExp(obj)
    {
        return {}.toString.call(obj) === "[object RegExp]" || obj instanceof RegExp;
    }

    /**
     * isString
     * This function is used in order to know if an object is a string.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is a string, false otherwise.
     */
    static isString(obj)
    {
        return typeof obj === "string" && {}.toString.call(obj) === "[object String]";
    }

    /**
     * isString
     * This function is used in order to know if an object is a string.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is a string, false otherwise.
     */
    static isChar(obj)
    {
        return Obj.isString(obj) && obj.length === 1;
    }

    /**
     * isError
     * This function is used in order to know if an object is an Error.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is an Error, false otherwise.
     */
    static isError(obj)
    {
        return {}.toString.call(obj) === "[object Error]";
    }

    /**
     * isWindowObject
     * This function is used in order to know if the object is the window object.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is the window object, false otherwise.
     */
    static isWindowObject(obj)
    {
        return obj != null && typeof value === "object" && 'setInterval' in value;
    }

    /**
     * isUndefined
     * This function is used in order to know if an object is undefined.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is undefined, false otherwise.
     */
    static isUndefined(obj)
    {
        return typeof obj === "undefined";
    }

    /**
     * isSameType
     * This function is used in order to know if two objects have the same type.
     * @param   {Object}   obj1        The first object to evaluate.
     * @param   {Object}   obj2        The second object to evaluate.
     * @return  {Boolean}  True if the two objects have the same type, false otherwise.
     */
    static isSameType(obj1, obj2)
    {
        return Obj.type(obj1) === Obj.type(obj2);
    }

    /**
     * isExisty
     * This function is used in order to know if an object is not null or undefined.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Boolean}  True if the object is existy, false otherwise.
     */
    static isExisty(obj)
    {
        return (!Obj.isNull(obj) && !Obj.isUndefined(obj));
    }

    /**
     * module
     * This function is used in order to transform a namespace into an object.
     * @param   {String}   ns         The namespace to evaluate
     * @param   {Object}   obj        A reference object where insert the result.
     * @return  {Object}  The generated object
     */
    static module(ns, obj)
    {
        var list = ns ? ns.split(".") : [], ns = list ? list.shift() : (ns || ""), obj = obj || {};
	    obj[ns] = {};

	    if (list.length)
	    	Obj.module(list.join('.'), obj[ns]);

	    return obj;
    }

    /**
     * build
     * This function is used in order to transform a namespace into an object (alias of module).
     * @param   {String}   ns         The namespace to evaluate
     * @param   {Object}   obj        A reference object where insert the result.
     * @return  {Object}  The generated object
     */
    static build(ns, obj)
    {
        return Obj.module(ns, obj);
    }

    /**
     * pairs
     * This function is used in order to get the name value pair from an object.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {Array}  An array of arrays of pairs
     */
    static pairs(obj)
    {
        var pairs = [];

    	Collection.each(obj, function (value, index)
    	{
    		pairs.push([index, value]);
    	});

    	return pairs;
    }

    /**
     * parent
     * This function is used in order to get a nested object inside a parent one.
     * @param   {Object}   obj        The object to evaluate.
     * @param   {String}   key         The property to look for.
     * @return  {Object}  The nested object if found, the whole object otherwise.
     */
    static parent(obj, key)
    {
        var target = key ? Obj.get(obj, key) : obj,
        objs = Collection.getByType(obj, 'object', true);

	    for (var o in objs)
	    {
	    	if (Obj.isPlainObject(objs[o]))
	      	{
	      		for (var p in objs[o])
	      		{
	          		if (Obj.isEqual(objs[o][p], target))
	          			return objs[o];
	        	}
	      	}
	    }

	    return obj;
    }

    /**
     * pluck
     * This function is used in order to get an array of extracted property values.
     * @param   {Object}   obj         The object to evaluate.
     * @param   {String}   key         A dot delimited namespace.
     * @return  {Array}  The properties as an array.
     */
    static pluck(obj, key)
    {
        return Collection.map(obj, function (value) { return Obj.resolve(value, key); });
    }

    /**
     * fetch
     * This function is used in order to get an array of extracted property values (alias of pluck).
     * @param   {Object}   obj         The object to evaluate.
     * @param   {String}   key         A dot delimited namespace.
     * @return  {Array}  The properties as an array.
     */
    static fetch(obj, key)
    {
        return Obj.pluck(obj, key);
    }

    /**
     * resolve
     * This function is used in order to get a value from a namespace or an extracted namespace from a partial one.
     * @param   {Object}   obj         The object to evaluate.
     * @param   {Boolean}  paths       If true look for a namespace, for a value otherwise.
     * @param   {String}   keys        A dot delimited namespace.
     * @param   {Boolean}  own         If true non enumerable properties become accessible, not otherwise.
     * @return  {String}  The property value or namespace.
     */
    static resolve(obj, paths, key, own)
    {
        if ((paths in obj) && !key)
  			return obj[paths];

    	return Collection.paths(obj, key, own)[paths];
    }

    /**
     * toQueryString
     * This function is used in order to create a query string from an object literal.
     * @param   {Object}   obj         The object to evaluate.
     * @param   {String}   prefix      A prefix to use.
     * @return  {String}  A query string.
     */
    static toQueryString(obj, prefix)
    {
        var ret = "";
	    Collection.deep(
	    {
	    	obj: obj,
	    	fn: function (depth, index, value)
	    	{
	     		index = index.toString();
	      		if (!Obj.isPlainObject(value))
	      		{
	        		if (Obj.isArray(value))
	        		{
	          			Collection.deep(value, function (arrDepth, arrIndex, arrValue)
	          			{
	            			ret += (prefix ? prefix + index + "[]" : index + "[]") + "=" + arrValue + "&";
	          			}, "*");
	        		}
	        		else
	        		{
	          			ret += (prefix ? prefix + index : index) + "=" + value + "&";
	        		}
	      		}
	    	},
	    	depth: "*",
	    	noArrays: true
	    });

	    ret = encodeURIComponent(ret.replace(/&$/g, ''));

	    return ret;
    }

    /**
     * type
     * This function is used in order to get the type of an object.
     * @param   {Object}   obj        The object to evaluate.
     * @return  {String}   type       The type of the object
     */
    static type(obj)
    {
        var types = "Date RegExp Element Arguments PlainObject Array Function String Bool NaN Infinite Number Null Undefined Object".split(" "), i;

    	for (i = 0; i < types.length; i++)
    	{
      		if (Obj["is" + types[i]].call(this, obj))
      		{
        		return types[i].toLowerCase().replace(/plainobject/g, "object").replace(/infinite/g, "infinity");
      		}
    	}

    	return false;
    }
};

class Func
{
    /**
     * after
     * This function is used in order to call a function each n times.
     * @param   {Function}  fn      The function to call
     * @param   {Number}    n       The number of times it needs to be called
     * @return  {Function} The computed function
     */
    static after(fn, n)
    {
        fn.n = fn.after = n;
        return function ()
    	{
      		if (fn.n > 1)
      		{
        		fn.n--;
      		}
      		else
      		{
        		fn.n = fn.after;
                return fn.apply(this, arguments);
      		}
    	};
    }

    /**
     * compose
     * This function is used in order to compose functions passed in parameters.
     * @return  {Function} The composed function
     */
    static compose()
    {
        var fns = Collection.filter(Obj.toArray(arguments), function(value) { if (Obj.isFunction(value)) return true; });
    	return function ()
    	{
      		var args = arguments;

      		for (var i = fns.length - 1; i >= 0; i--)
      		{
      			args = [fns[i].apply(this, args)];
      		}

      		return args[0];
    	};
    }

    /**
     * debounce
     * This function is used in order to temper a function for n milliseconds.
     * @param   {Function}  fn      The function to call
     * @param   {Number}    n       The number of milliseconds to wait before calling the function
     * @param   {Boolean}   edge    If true, fn is triggered on the leading edge of the interval,
     *                              on the trailing otherwise.
     * @return  {Function} The computed function
     */
    static debounce(fn, n, edge)
    {
        var res, timeout;
    	return function ()
    	{
      		var scope = this, fargs = arguments;
      		var next = function ()
      		{
        		timeout = null;
        		if (!edge)
        			res = fn.apply(scope, fargs);
      		};

      		var ready = edge && !timeout;
      		clearTimeout(timeout);
      		timeout = setTimeout(next, n);

      		if (ready)
      			res = fn.apply(scope, fargs);

      		return res;
    	};
    }

    /**
     * defer
     * This function is used in order to call a function after the call stack is cleared.
     * @param   {Function}  fn      The function to call
     * @return  {Function} The computed function
     */
    static defer(fn)
    {
        return Func.delay.call(this, fn, 0);
    }

    /**
     * delay
     * This function is used in order to call a function n milliseconds later.
     * This is actually a wrapper for setTimeout call for any functions.
     * @param   {Function}  fn      The function to call
     * @param   {Number}    n       The number of milliseconds to wait
     * @return  {Function} The computed function
     */
    static delay(fn, n)
    {
        return function ()
		{
      		var args = arguments;
      		setTimeout(function ()
      		{
        		return fn.apply(null, args);
      		}, n);
   		};
    }

    /**
     * memoize
     * This function is used in order to return a memoized version of the function.
     * @param   {Function}  fn      The function to call
     * @param   {String}    hash    A hash key where to store the computed result of the previous execution
     * @return  {Function} The computed function
     */
    static memoize(fn, hash)
    {
        var cache = {};
    	hash = hash || (hash = Utility.identity);

    	return function ()
    	{
      		var key = hash.apply(this, arguments);
      		return (key in cache) ? cache[key] : (cache[key] = fn.apply(this, arguments));
    	};
    }

    /**
     * once
     * This function is used in order to make the function single use only.
     * @param   {Function}  fn      The function to call
     * @return  {Function} The computed function
     */
    static once(fn)
    {
        fn.n = fn.once = 1;
    	return function ()
    	{
      		if (fn.n)
      		{
        		fn.n--;
        		return fn.apply(this, arguments);
      		}
    	};
    }

    /**
     * throttle
     * This function is used in order to call a function only each n milliseconds.
     * This is actually a wrapper for setTimeout call for any functions.
     * @param   {Function}  fn      The function to call
     * @param   {Number}    n       The number of milliseconds to wait between each call
     * @return  {Function} The computed function
     */
    static throttle(fn, n)
    {
        var scope, last, timeout, fargs, ret, res, later;

    	later = function ()
    	{
      		last = new Date;
      		timeout = null;
      		ret = fn.apply(scope, fargs);
    	};

    	return function ()
    	{
     		var now = new Date();
      		var left = n - (now - last);
      		scope = this;
      		fargs = arguments;
      		if (left <= 0)
      		{
        		clearTimeout(timeout);
        		timeout = null;
        		last = now;
        		res = fn.apply(scope, fargs);
      		}
      		else if (!timeout)
      		{
        		timeout = setTimeout(later, left);
      		}
      		return res;
    	}
    }

    /**
     * times
     * This function is used in order to call a function n times in a row.
     * @param   {Function}  fn      The function to call
     * @param   {Number}    n       The number of times we need to call the function
     * @return  {Function} The computed function
     */
    static times(fn, n)
    {
        fn.n = n;
    	return function ()
    	{
            var result;
    		for (var i = 0; i < fn.n; i++)
    		{
    			result = fn.apply(this, arguments);
    		}

            return result;
    	};
    }
};

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
        index = Obj.isArray(index) ? Collection.keys(index) : index;

    	return Collection.filter(arr, function(v, i)
    	{
      		if (i == index || Collection.contains(index, i.toString()))
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

		return Collection.filter(Arr.uniq(arr), function(v)
		{
			return !Collection.inArray(rest, v);
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
        return Arr.first(arr, n);
    }

    /**
     * indexOf
     * This function is used in order to get the first index at which value occurs.
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   value        The value to look for.
     * @param   {Number}   from         The starting index.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Number} The index of the element if found, -1 otherwise
     */
    static indexOf(arr, value, from, deep)
    {
        if (arr == null)
			return -1;

    	var deep = deep || Obj.isBool(from) ? from : false, from = Obj.isNumber(from) ? from : 0;

    	if (arr.indexOf && !deep)
    		return arr.indexOf(value, from);

    	for (var i = 0; i < arr.length; i++)
    	{
      		if (deep && Obj.isEqual(arr[i], value) && i >= from)
      			return i;
      		else if (arr[i] === value && i >= from)
      			return i;
    	}

    	return -1;
    }

    /**
     * firstIndexOf
     * This function is used in order to get the first index at which value occurs.
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   value        The value to look for.
     * @param   {Number}   from         The starting index.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Number} The index of the element if found, -1 otherwise
     */
    static firstIndexOf(arr, value, from, deep)
    {
        return Arr.firstIndexOf(arr, value, from, deep);
    }

    /**
     * initial
     * This function is used in order to get all but the last n elements.
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   n            The number of elements to skip.
     * @return  {Array} An array of all needed elements
     */
    static initial(arr, n)
    {
        var m = n ? arr.length - n : arr.length - 1;

        return Collection.filter(arr, function(v, i)
        {
            if (i < m)
                return true;
        });
    }

    /**
     * inteserction
     * This function is used in order to get the elements that are in the second arguments.
     * @param   {Array}    arr          The array to evaluate.
     * @return  {Array} An array of all needed elements
     */
    static intersection(arr)
    {
        var arrs = Array.prototype.slice.call(arguments, 1);

    	return Collection.filter(Arr.uniq(arr), function (v)
    	{
      		return Collection.all(arrs, function (alt)
      		{
        		return Arr.indexOf(alt, v, true) != -1;
      		});
    	});
    }

    /**
     * last
     * This function is used in order to get the last elements of an array.
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   n            The number of elements to get.
     * @return  {Array} An array of all needed elements
     */
    static last(arr, n)
    {
        return n ? Array.prototype.slice.call(arr, arr.length-n, arr.length) : arr[arr.length-1];
    }

    /**
     * lastIndexOf
     * This function is used in order to get the last index at which value occurs.
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   value        The value to look for.
     * @param   {Number}   from         The starting index.
     * @param   {Boolean}   deep        If true, make iteration on nested arrays and objects.
     * @return  {Number} The index of the element if found, -1 otherwise
     */
    static lastIndexOf(arr, value, from, deep)
    {
        if (arr == null)
			return -1;

    	var deep = deep || Obj.isBool(from) ? from : false, from = Obj.isNumber(from) ? from : arr.length;

    	if (arr.lastIndexOf && !deep)
    		return arr.lastIndexOf(value, from);

    	while (--from)
    	{
      		if (deep && Obj.isEqual(arr[from], value))
      			return from;
      		else if (arr[from] === value)
      			return from;
    	}

    	return -1;
    }

    /**
     * toObject
     * This function is used in order to transform an array to an object.
     * @return {Object} The converted object
     */
    static toObject()
    {
        var arrs = [], ret = {}, allArrays = true, i = 0;
    	Collection.each(arguments, function (value)
    	{
      		if (Obj.isArray(value)) arrs.push(value);
      		else allArrays = false;
    	});

    	if (allArrays && arrs.length === 2)
    	{
      		var keys = arrs[1];
      		for (; i < arrs[0].length; i++)
      		{
        		ret[arrs[0][i]] = keys[i];
      		}
    	}
    	else if (allArrays && arrs.length > 1)
    	{
      		for (; i < arrs.length; i++)
      		{
        		var key = arrs[i][0];
        		ret[key] = arrs[i][1];
      		}
   		}
   		else if (allArrays && arrs.length == 1)
   		{
      		for (; i < arrs[0].length; i += 2)
      		{
        		ret[arrs[0][i]] = arrs[0][i + 1];
      		}
    	}
    	else
    	{
      		for (; i < arguments.length; i+=2)
      		{
        		ret[arguments[i]] = arguments[i+1];
      		}
    	}

    	return ret;
    }

    /**
     * remove
     * This function is used in order to remove all instances of value from the array.
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   value        The index or array of index of the .
     * @return  {Array} An array of all needed elements
     */
    static remove(col, value)
    {
        if (col instanceof Array)
		{
      		var key, i = col.length;
      		while (i--)
      		{
      			if ((key = Arr.indexOf(col, value, true)) !== -1)
      				col.splice(key, 1);
      		}
    	}

    	return col;
    }

    /**
     * rest
     * This function is used in order to get all elements but the first n elements.
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   n            The number of elements to skip.
     * @return  {Array} An array of all needed elements
     */
    static rest(arr, n)
    {
        var m = n || 1;

    	return Collection.filter(arr, function(v, i)
    	{
    		if (i >= m)
    			return true;
    	});
    }

    /**
     * tail
     * This function is used in order to get all elements but the first n elements (alias of rest).
     * @param   {Array}    arr          The array to evaluate.
     * @param   {Number}   n            The number of elements to skip.
     * @return  {Array} An array of all needed elements
     */
    static tail(arr, n)
    {
        return Arr.rest(arr, n);
    }

    /**
     * union
     * This function is used in order to transform two arrays into one.
     * @return {Array} The new array
     */
    static union()
    {
        return Arr.uniq(Array.prototype.concat.apply(Array.prototype, arguments));
    }

    /**
     * uniq
     * This function is used in order to get a copy of the unique elements as an array.
     * @param   {Array}    arr          The array to process on.
     * @param   {Function}  fn          The function to apply.
     * @param   {Object}    scope       The context to bound to.
     * @return {Array} The new array
     */
    static uniq(arr, fn, scope)
    {
        var seen = [];
    	return Collection.filter(Obj.isFunction(fn) ? Collection.map(arr, fn, scope) : arr, function (v)
    	{
      		if (Arr.indexOf(seen, v, true) === -1)
      		{
        		seen[seen.length] = v;
        		return true;
      		}
    	});
    }

    /**
     * unique
     * This function is used in order to get a copy of the unique elements as an array (alias of uniq).
     * @param   {Array}     arr         The array to process on.
     * @param   {Function}  fn          The function to apply.
     * @param   {Object}    scope       The context to bound to.
     * @return {Array} The new array
     */
    static unique(arr, fn, scope)
    {
        return Arr.uniq(arr, fn, scope);
    }

    /**
     * without
     * This function is used in order to get a copy of the arr with the values removed.
     * @param   {Array}     arr         The arr to process on.
     * @param   {Array}     values      The values to exclude
     * @return  {Array} The new array
     */
    static without(arr, values)
    {
        return Collection.filter(arr, function (v)
		{
			if (!Collection.contains(values, v))
				return true;
		});
    }

    /**
     * exclude
     * This function is used in order to get a copy of the arr with the values removed (alias of without).
     * @param   {Array}     arr         The arr to process on.
     * @param   {Array}     values      The values to exclude
     * @return  {Array} The new array
     */
    static exclude(arr, values)
    {
        return Arr.without(arr, values);
    }

    /**
     * zip
     * This function is used in order to merge the element of multiple array into one.
     * @param   {Array}     arr         A list of array arguments.
     * @return  {Array} The new array
     */
    static zip(arr)
    {
        var i = 0, ret = [],
    	arrs = Array.prototype.slice.call(arguments, 0);
    	for (; i < arr.length; i++)
    	{
    		ret[i] = Obj.pluck(arrs, "" + i);
    	}

    	return ret;
    }
};

class Num
{
    /**
     * range
     * This function is used in order to get a complete interval between two numbers with chosen step.
     * @param   {Number}    start        Start number
     * @param   {Number}    stop         Stop number
     * @param   {Number}    step         Step number
     * @return  {Array}     ret          An array containing every number between start and stop considering step.
     */
    static range(start, stop, step)
    {
        var i = 0, ret = [], len = 0;

    	start = (arguments.length == 1) ? 0 : start;
        stop = stop || start;
        step = step || 1;

        if (!Obj.isNumber(start) || !Obj.isNumber(stop) || !Obj.isNumber(step))
            return false;

        if (stop < start)
        {
            let swap = stop;
            stop = start;
            start = swap;
        }

        len = Math.max(Math.ceil((stop - start) / step), 0);

    	while (i <= len)
    	{
      		ret[i++] = start;
      		start += step;
    	}

    	return ret;
    }

    /**
     * isZero
     * This function is used in order to know if the number is the number 0.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is 0, false otherwise.
     */
    static isZero(n)
    {
        if (Obj.isNumber(n) && n === 0)
			return true;

		return false;
    }

    /**
     * isOne
     * This function is used in order to know if a number is the number 1.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is 1, false otherwise.
     */
    static isOne(n)
    {
        if (Obj.isNumber(n) && n === 1)
            return true;

        return false;
    }

    /**
     * isEven
     * This function is used in order to know if a number is even.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is even, false otherwise.
     */
    static isEven(n)
    {
        return Obj.isNumber(n) && n % 2 === 0;
    }

    /**
     * isOdd
     * This function is used in order to know if a number is odd.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is odd, false otherwise.
     */
    static isOdd(n)
    {
        return Obj.isNumber(n) && (n % 2 === 1 || n % 2 === -1);
    }

    /**
     * isPositive
     * This function is used in order to know if a number is positive.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is >= 0, false otherwise.
     */
    static isPositive(n)
    {
        if (Obj.isNumber(n) && Num.gte(n, 0))
			return true;

		return false;
    }

    /**
     * isNegative
     * This function is used in order to know if a number is negative.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is <= 0, false otherwise.
     */
    static isNegative(n)
    {
        if (Obj.isNumber(n) && Num.lte(n, 0))
            return true;

        return false;
    }

    /**
     * isDouble
     * This function is used in order to know if the first value is 2 times the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The  value.
     * @return  {Boolean}   True if n is 2 times val, false otherwise.
     */
    static isDouble(n, val)
    {
        return Num.isTimes(n, val, 2);
    }

    /**
     * isTriple
     * This function is used in order to know if the first value is 3 times the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The  value.
     * @return  {Boolean}   True if n is 3 times val, false otherwise.
     */
    static isTriple(n, val)
    {
        return Num.isTimes(n, val, 3);
    }

    /**
     * isTimes
     * This function is used in order to know if the first value is t times the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The  value.
     * @param   {Number}    t        The number of times.
     * @return  {Boolean}   True if n is t times val, false otherwise.
     */
    static isTimes(n, val, t)
    {
        if (Obj.isNumber(n) && Obj.isNumber(val) && Obj.isNumber(t))
		{
			if (n === val * t)
				return true;
		}

		return false;
    }

    /**
     * gt
     * This function is used in order to know if the first value is greater than the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The gap value.
     * @return  {Boolean}   True if n is greater than val, false otherwise.
     */
    static gt(n, val)
    {
        if (Obj.isNumber(n) && Obj.isNumber(val))
		{
			if (n > val)
				return true;
		}

		return false;
    }

    /**
     * gte
     * This function is used in order to know if the first value is greater than or equal to the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The gap value.
     * @return  {Boolean}   True if n is greater than val or equal, false otherwise.
     */
    static gte(n, val)
    {
        if (Obj.isNumber(n) && Obj.isNumber(val))
		{
			if (Num.gt(n,val) || n === val)
				return true;
		}

		return false;
    }

    /**
     * lt
     * This function is used in order to know if the first value is lower than the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The gap value.
     * @return  {Boolean}   True if n is lower than val, false otherwise.
     */
    static lt(n, val)
    {
        return !Num.gte(n, val);
    }

    /**
     * lte
     * This function is used in order to know if the first value is lower than or equal to the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The gap value.
     * @return  {Boolean}   True if n is lower than val or equal, false otherwise.
     */
    static lte(n, val)
    {
        return !Num.gt(n, val);
    }

    /**
     * isWithin
     * This function is used in order to know if a number is within two others.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val1     The first gap value.
     * @param   {Number}    val2    The second gap value.
     * @return  {Boolean}   True if n is within val1 & val2, false otherwise.
     */
    static isWithin(n, val1, val2)
    {
        if (!Obj.isNumber(n) && !Obj.isNumber(val1) && !Obj.isNumber(val2))
            return false;

        if (Num.gt(val2, val1))
        {
            let copy = val1;
            val1 = val2;
            val2 = copy;
        }

        return (Num.gte(n, val1) && Num.lte(n, val2));
    }

    /**
     * isDecimal
     * This function is used in order to know if a number is a decimal.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is a decimal, false otherwise.
     */
    static isDecimal(n)
    {
        return Obj.isNumber(n) && n % 1 !== 0;
    }

    /**
     * isFinite
     * This function is used in order to know if a number is finite.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is finite, false otherwise.
     */
    static isFinite(n)
    {
        return !Obj.isInfinite(n) && !Obj.isNaN(n);
    }

    /**
     * isInteger
     * This function is used in order to know if a number is an integer.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is an integer, false otherwise.
     */
    static isInteger(n)
    {
        return Obj.isNumber(n) && n % 1 === 0;
    }
};

class Str
{
    /**
     * fromQueryString
     * This function is used in order to create an object from a query string encoded by toQueryString.
     * @param   {String}    str      The query string to evaluate.
     * @param   {Boolean}   deep     If true, the function will attempt to reassemble all arrays encoded.
     * @return  {Object}   The object from the query string.
     */
    static fromQueryString(str, deep)
    {
        var ret = {}, parts;

	    Collection.each(decodeURIComponent(str).split("&"), function (value)
	    {
	    	parts = value.split("=");
	      	if (parts[0].match(/\[\]/g) && deep)
	      	{
	        	parts[0] = parts[0].replace(/\[\]/g, '');
	        	if (parts[0] in ret)
	        	{
	          		ret[ parts[0] ].push(parts[1]);
	        	}
	        	else
	        	{
	          		ret[ parts[0] ] = [parts[1]];
	        	}
	      	}
	      	else
	      	{
	        	ret[ parts[0] ] = parts[1];
	      	}
	    });

	    return ret;
    }

    /**
     * htmlEncode
     * This function is used in order to encode common html character into their entity representations.
     * @param   {String}    str      The string on which apply html encoding.
     * @return  {String}    str      The html encoded string.
     */
    static htmlEncode(str)
    {
        var entities =
		{
      		'\u0026':['amp'], '\u0022':['quot'], '\u0027':['apos'], '\u003C':['lt'],
      		'\u003E':['gt'], '\u00A0':['nbsp'], '/':['#x2F']
    	};

    	for (var e in entities)
    	{
      		var entity = new RegExp(e, 'g');
      		str = str.replace(entity, '&' + entities[e][0] + ';');
    	}

    	return str;
    }

    /**
     * htmlDecode
     * This function is used in order to decode html encoded string.
     * @param   {String}    str      The string on which apply html decoding.
     * @return  {String}    str      The html decoded string.
     */
    static htmlDecode(str)
    {
        var entities =
		{
      		'&quot;':['\"'], '&amp;':['&'], '&apos;':["'"], '&lt;':['<'],
      		'&gt;':['>'], '&nbsp;':[' '], '&#x2F;':['/']
    	};

    	for (var e in entities)
    	{
      		var entity = new RegExp(e, 'g');
      		str = str.replace(entity, entities[e][0]);
    	}

    	return str;
    }

    /**
     * ext
     * This function is used in order to get a file extension.
     * @param   {String}    str      The string on which get the file extension.
     * @return  {String}    str      The file extension.
     */
    static ext(str)
    {
        var exts = str.split('.');

        return exts[Collection.len(exts) - 1];
    }

    /**
     * toCamelCase
     * This function is used in order to transform a string to camel case notation.
     * Note: If the str is snake case, this function won't work.
     * @param   {String}    str      The string on which apply camel casing.
     * @return  {String}    str      The camel-cased string.
     */
    static toCamelCase(str)
    {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index)
        {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    }

    /**
     * capitalize
     * This function is used in order to capitalize a string.
     * @param   {String}    str      The string on which apply capitalizing.
     * @return  {String}    str      The capitalized string.
     */
    static capitalize(str)
    {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * urlFriendly
     * This function is used in order to transform a string to be url friendly.
     * @param   {String}    str      The string on which apply url friendly transformation.
     */
    static urlFriendly(str)
    {
        return str.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
    }

    /**
     * isCapitalized
     * This function is used in order to know if a string is capitalized.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is capitalized, false otherwise.
     */
    static isCapitalized(str)
    {
        if (!Obj.isString(str))
			return false;

		let words = string.split(' ');

		for (let i = 0; i < words.length; i++)
		{
			let word = words[i];
			if (word.length)
			{
				let chr = word.charAt(0);
				if (chr !== chr.toUpperCase())
					return false;
			}
		}

		return true;
    }

    /**
     * isLowerCase
     * This function is used in order to know if a string is lower case only.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is lower case only, false otherwise.
     */
    static isLowerCase(str)
    {
        return Obj.isString(str) && str === str.toLowerCase();
    }

    /**
     * isUpperCase
     * This function is used in order to know if a string is upper case only.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is upper case only, false otherwise.
     */
    static isUpperCase(str)
    {
        return Obj.isString(str) && str === str.toUpperCase();
    }

    /**
     * isSpace
     * This function is used in order to know if a char is the space char.
     * @param   {String}    c      The char to evaluate.
	 * @return  {Boolean} True if the char is the space char, false otherwise.
     */
    static isSpace(c)
    {
        if (!Obj.isChar(c))
            return false;

        let charCode = c.charCodeAt(0);

        return (charCode > 8 && charCode < 14) || charCode == 32;
    }

    /**
     * include
     * This function is used in order to know if a string include a substring.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}   substr   The substring to look for.
     * @return  {Boolean}   True if the string includes the substring, false otherwise.
     */
    static include(str, substr)
    {
        return str.indexOf(substr) > -1;
    }

    /**
     * startWith
     * This function is used in order to know if a string starts with a substring.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}   substr   The substring to look for.
     * @return  {Boolean}   True if the string starts with the substring, false otherwise.
     */
    static startWith(str, substr)
    {
        return Obj.isString(str) && str.indexOf(substr) === 0;
    }

    /**
     * endWit
     * This function is used in order to know if a string ends with a substring.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}   substr   The substring to look for.
     * @return  {Boolean}   True if the string ends with the substring, false otherwise.
     */
    static endWith(str, substr)
    {
        if (!Obj.isString(str))
            return false;

        substr += '';
        var position = str.length - substr.length;

        return position >= 0 && str.indexOf(substr, position) === position;
    }

    /**
     * isPalindrome
     * This function is used in order to know if a string is a palindrome.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is a palindrome, false otherwise.
     */
    static isPalindrome(str)
    {
        if (!Obj.isString(str))
            return false;

        str = str.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
        var length = str.length - 1;

        for (var i = 0, half = Math.floor(length / 2); i <= half; i++)
        {
            if (str.charAt(i) !== str.charAt(length - i))
                return false;
        }

        return true;

    }
};

class Utility
{
    /**
     * identity
     * This function is used in order to provide identity pattern.
     * @param   {Unknown}   value    The value on which apply identity pattern.
     * @return  {Unknown}   value    The input value.
     */
    static identity(value)
    {
        return value;
    }

    /**
     * value
     * This function is used in order to execute or get value from entity.
     * @param  {Function || Object}     value    The value to execute or get.
     * @return {Unknown}                res      The corresponding execution or value.
     */
    static value(value)
    {
        return Obj.isFunction(value) ? value() : value;
    }

    /**
     * language
     * This function is used in order to get language code from language string such as en-us.
     * @param  {String}     value    The string language to parse from.
     * @return {String}     res      The corresponding language code.
     */
    static language(value)
    {
        if (Obj.isString(value))
        {
            var res = value.split("-");
            return res[0];
        }
    }
};

module.exports = {
    Collection: Collection,
    Arr: Arr,
    Func: Func,
    Obj: Obj,
    Num: Num,
    Str: Str,
    Utility: Utility,
};
