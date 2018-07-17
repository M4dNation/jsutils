const alpha = 
{
    'en-US': /^[A-Z]+$/i,
    'bg-BG': /^[А-Я]+$/i,
    'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    'da-DK': /^[A-ZÆØÅ]+$/i,
    'de-DE': /^[A-ZÄÖÜß]+$/i,
    'el-GR': /^[Α-ω]+$/i,
    'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
    'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
    'nb-NO': /^[A-ZÆØÅ]+$/i,
    'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
    'nn-NO': /^[A-ZÆØÅ]+$/i,
    'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
    'ru-RU': /^[А-ЯЁ]+$/i,
    'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
    'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
    'sv-SE': /^[A-ZÅÄÖ]+$/i,
    'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
    'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
    'ar': /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
};

const alphanumeric = 
{
    'en-US': /^[0-9A-Z]+$/i,
    'bg-BG': /^[0-9А-Я]+$/i,
    'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    'da-DK': /^[0-9A-ZÆØÅ]+$/i,
    'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
    'el-GR': /^[0-9Α-ω]+$/i,
    'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
    'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
    'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
    'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
    'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
    'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
    'ru-RU': /^[0-9А-ЯЁ]+$/i,
    'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
    'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
    'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
    'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
    'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
    'ar': /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
};

const DEFAUT_FQDN_OPTIONS = 
{
    requireTld: true,
    allowUnderscores: false,
    allowTrailingDot: false
};

const DEFAULT_URL_OPTIONS = 
{
    protocols: ['http', 'https'],
    require_tld: true,
    require_protocol: true,
    require_host: true,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
};

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

const ascii = /^[\x00-\x7F]+$/;
const IPV6 = /^[0-9A-F]{1,4}$/i;
const hexadecimal = /^[0-9A-F]+$/i;
const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
const validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
const validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
const wrappedIPV6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
const IPV4 = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
const validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

class Collection
{
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

    /**
     * isAlpha
     * This function is used in order to know if a string is an alpha string.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}    locale   The locate to check for. 
	 * @return  {Boolean} True if the string is an alpha string, false otherwise.
     */
    static isAlpha(str, locale = "fr-FR")
    {
        if (!Obj.isString(str))
            return false;

        if (locale in alpha)
            return alpha[locale].test(str);

        throw new Error(`Cannot check alpha on locale ${locale}`);
    }

    /**
     * isAlphanumeric
     * This function is used in order to know if a string is an alphanumeric string.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}    locale   The locate to check for. 
	 * @return  {Boolean} True if the string is an alphanumeric string, false otherwise.
     */
    static isAlphanumeric(str, locale = "fr-FR")
    {
        if (!Obj.isString(str))
            return false;

        if (locale in alphanumeric)
            return alphanumeric[locale].test(str);
        
        throw new Error(`Cannot check alphanumeric on locale ${locale}`);
    }

    /**
     * isNumeric
     * This function is used in order to know if a string is a numeric string.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is a numeric string, false otherwise.
     */
    static isNumeric(str)
    {
        if (!Obj.isString(str))
            return false;

        return numeric.test(str);
    }

    /**
     * isAscii
     * This function is used in order to know if a string is an ASCII string.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is an ASCII string, false otherwise.
     */
    static isAscii(str)
    {
        if (!Obj.isString(str))
            return false;
        
        return ascii.test(str);
    }

    /**
     * isHexadecimal
     * This function is used in order to know if a string is an hexadecimal string.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is an hexadecimal string, false otherwise.
     */
    static isHexadecimal(str)
    {
        if (!Obj.isString(str))
            return false;

        return hexadecimal.test(str);
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

    /**
     * flagEncode
     * This function is used in order to encode a list of boolean values as a flag entity.
     * @param   {Array}     booleans        The booleans to parse.
     * @param   {Array}     binaryValues    The corresponding binary values.
     * @return  {Number}                    The generated flag.
     */
    static flagEncode(booleans, binaryValues)
    {
        let flag = 0;

        if (!Obj.isArray(booleans) || !Obj.isArray(binaryValues) || !Obj.isEqual(booleans.length, binaryValues.length))
            return flag;

        for (let i = 0; i < booleans.length; i++)
            flag |= booleans[i] ? binaryValues[i] : 0;

        return flag;
    }

    /**
     * flagDecode
     * This function is used in order to decode a flag as a list of boolean values.
     * @param   {Number}    flag            The flag to parse.
     * @param   {Array}     binaryValues    The corresponding binary values.
     * @return  {Array}                    The corresponding booleans.
     */
    static flagDecode(flag, binaryValues)
    {
        let booleans = [];

        if (Num.isZero(flag) || !Obj.isArray(binaryValues))
            return [];

        for (let v of binaryValues)
        {
            if (!Num.isZero(flag & v))
                booleans.push(v);
        }

        return booleans;
    }

    /**
     * rgbToHex
     * This function is used in order to transform an rgb color value to an hex.
     * @param   {Number}    r               The red color value.
     * @param   {Number}    g               The green color value.
     * @param   {Number}    b               The blue color value. 
     * @return  {String}                    The corresponding hexadecimal string.
     */
    static rgbToHex(r, g, b)
    {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    /**
     * hexToRgb
     * This function is used in order to transform an hex value to an rgb one.
     * @param   {String}    hex             The hex value.
     * @return  {Object}                    The corresponding rgb object.
     */
    static hexToRgb(hex)
    {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

        hex = hex.replace(shorthandRegex, function(m, r, g, b) 
        {
            return r + r + g + g + b + b;
        });
        
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        
        return result ? 
        {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    /**
     * isHexColor
     * This function is used in order to transform an hex value to an rgb one.
     * @param   {String}    hex             The hex value.
     * @return  {Object}                    The corresponding rgb object.
     */
    static isHexColor(color)
    {
        if (Obj.isString(color))
            return hexcolor.test(color);

        if (Obj.isNumber(color))
            return color < 16777215 && color > 0;

        return false;
    }

    /**
     * isFQDN
     * This function is used in order to know if a value is a Fully Qualified Domain Name.
     * @param   {String}    str             The domain to evaluate.
     * @return  {Boolean}                   True if domain is a FQDN, false otherwise.
     */
    static isFQDN(str, options = DEFAUT_FQDN_OPTIONS)
    {
		if (!Obj.isString(str))
			return false;

        if (options.allowTrailingDot && Obj.isEqual(str[str.length - 1], "."))
            str = str.substring(0, str.length -1);

        const parts = str.split(".");

        for (let i = 0; i < parts.length; i++)
        {
            if (parts[i].length > 63)
                return false;
        }

        if (options.requireTld)
        {
            const tld = parts.pop();
            
            if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld))
                return false;

            if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld))
                return false;
        }

        for (let part, i = 0; i < parts.length; i++)
        {
            part = parts[i];

            if (options.allowUnderscores)
                part = part.replace(/_g/, '');

            if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part))
                return false;

            if (/[\uff01-\uff5e]/.test(part))
                return false;

            if (Obj.isEqual(part[0], "-") || Obj.isEqual(part[part.length -1], "-"))
                return false;
        }

        return true;
    }

    /**
     * isIp
     * This function is used in order to know if a value is an ip address.
     * @param   {String}    str             The address to evaluate.
     * @param   {Number}    version         The ip protocol version to use.
     * @return  {Boolean}                   True if address is an ip, false otherwise.
     */
    static isIp(str, version)
    {
        if (Obj.isFalsy(version))
            return Utility.isIp(str, 4) || Utility.isIp(str, 6);
        
        if (Obj.isEqual(version, 4))
        {
            if (!IPV4.test(str))
                return false;

            const parts = str.split(".").sort((a,b) => a -b);
            return parts[3] <= 255;
        }
        else if (Obj.isEqual(version, 6))
        {
            const blocks = str.split(":");
            let foundOmissionBlock = false;
            const foundIPV4TransitionBlock = Utility.isIp(blocks[blocks.length - 1], 4);
            const expectedNumberOfBlocks = foundIPV4TransitionBlock ? 7 : 8;

            if (blocks.length > expectedNumberOfBlocks)
                return false;

            if (Obj.isEqual(str, "::"))
            {
                return true;
            }
            else if (str.substr(0, 2) === "::")
            {
                blocks.shift();
                blocks.shift();
                foundOmissionBlock = true;
            }
            else if (Obj.isEqual(str.substr(str.length - 2), "::"))
            {
                blocks.pop();
                blocks.pop();
                foundOmissionBlock = true;
            }

            for (let i = 0; i < blocks.length; ++i) 
            {
                if (Obj.isEqual(blocks[i], "") && i > 0 && i < blocks.length - 1) 
                {
                    if (foundOmissionBlock) 
                        return false; 

                    foundOmissionBlock = true;
                } 
                else if (!IPV6.test(blocks[i])) 
                {
                    return false;
                }
            }
            
            if (foundOmissionBlock) 
                return blocks.length >= 1;
          
            return blocks.length === expectedNumberOfBlocks;
        }

        return false;
    }

    /**
     * isURL
     * This function is used in order to know if a value is an URL address.
     * @param   {String}    str             The address to evaluate.
     * @param   {Number}    version         The ip protocol version to use.
     * @return  {Boolean}                   True if address is an ip, false otherwise.
     */
    static isURL(url, options = DEFAULT_URL_OPTIONS)
    {
        if (Obj.isFalsy(url) || url.length >= 2083 || /[\s<>]/.test(url))
            return false;
        
        if (Obj.isEqual(url.indexOf('mailto:'), 0))
            return false;

        let protocol, auth, host, hostname, port, portStr, split, ipv6;

        split = url.split("#");
        url = split.shift();

        split = url.split("?");
        url = split.shift();

        split = url.split("://");

        if (split.length > 1)
        {
            protocol = split.shift();
            if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1)
                return false;
        }
        else if (options.require_protocol)
        {
            return false;
        }
        else if (options.allow_protocol_relative_urls && url.substr(0, 2) === "//")
        {
            split[0] = url.substr(0, 2);
        }

        url = split.join("://");

        if (Obj.isEqual(url, ""))
            return false;
        
        split = url.split("/");
        url = split.shift();

        if (Obj.isEqual(url, "") && !options.require_host)
            return true;

        split = url.split("@");

        if (split.length > 1)
        {
            auth = split.shift;
            if (auth.indexOf(":" >= 0 && auth.split(":").length > 2))
                return false;
        }

        hostname = split.join("@");

        portStr = null;
        ipv6 = null;

        const ipv6Match = hostname.match(wrappedIPV6);

        if (ipv6Match)
        {
            host = "";
            ipv6 = ipv6Match[1];
            portStr = ipv6Match[2] || null;
        }
        else
        {
            split = hostname.split(":");
            host = split.shift();
            if (split.length)
                portStr = split.join(":");
        }

        if (!Obj.isNull(portStr))
        {
            port = parseInt(portStr, 10);

            if (!/^[0-9]+$/.test(portStr) || port <= 0 || port > 65535)
                return false;
        }

        if (!Utility.isIp(host) && !Utility.isFQDN(host, options) && (!ipv6 && !Utility.isIp(ipv6, 6)))
            return false;

        return true;
    }

    /**
     * isDataURI
     * This function is used in order to know if a data is an URI .
     * @param   {String}    data            The data to evaluate.
     * @return  {Boolean}                   True if data is an URI, false otherwise.
     */
    static isDataURI(data)
    {
        data = data.split(',');
        
        if (data.length < 2) 
            return false;
        
        const attributes = data.shift().trim().split(';');
        const schemeAndMediaType = attributes.shift();
        const mediaType = schemeAndMediaType.substr(5);

        if (schemeAndMediaType.substr(0, 5) !== 'data:')
            return false;
  
        if (mediaType !== '' && !validMediaType.test(mediaType)) 
            return false;

        for (let i = 0; i < attributes.length; i++) 
        {
            if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') 
            {
            } 
            else if (!validAttribute.test(attributes[i])) return false;
        }

        for (let i = 0; i < data.length; i++) 
        {
            if (!validData.test(data[i]))
                return false;
        }
        
        return true;
    }

    /**
     * isPort
     * This function is used in order to know if a value is a port.
     * @param   {Number}    value           The value to evaluate.
     * @return  {Boolean}                   True if value is a port, false otherwise.
     */
    static isPort(value)
    {
        value = parseInt(value, 10);
        if (!Obj.isNumber(value))
            return false;

        return value >= 0 && value <= 65535;
    }

    /**
     * isHash
     * This function is used in order to know if a value is an hash.
     * @param   {String}    hash            The hash to evaluate.
     * @param   {String}    algorithm       The algorithm to evaluate.
     * @return  {Boolean}                   True if value is a port, false otherwise.
     */
    static isHash(hash, algorithm)
    {
        if (!Obj.isString(hash))
            return false;

        const reg = new RegExp(`^[a-f0-9]{${HASH_LENGTHS[algorithm]}}$`);

        return reg.test(hash);
    }
};

class Env
{
    /**
     * getEnv
     * This function is used in order to get current running environment.
     * @return  {Object}   env    The current environment (self or window client side, global in nodejs server side).
     */
    static getEnv()
    {
        if (typeof self !== "undefined")
            return self;
	    else if (typeof window !== "undefined")
            return window;
	    else if (typeof global !== "undefined")
            return global;

        throw new Error("unable to locate environment object");
    }

    /**
     * getWindowObject
     * This function is used in order to get the window object reference.
     * @return  {Window}  The window object if client side, false otherwise.
     */
    static getWindowObject()
    {
        if (typeof window !== "undefined")
            return window;

        return false;
    }

    /**
     * getSelf
     * This function is used in order to get the self object reference.
     * @return  {Object}  The self object if client side, false otherwise.
     */
    static getSelf()
    {
        if (typeof self !== "undefined")
            return self;

        return false;
    }

    /**
     * getGlobal
     * This function is used in order to get the global object reference.
     * @return  {Object}  The global object if server side (nodejs), false otherwise.
     */
    static getGlobal()
    {
        if (typeof global !== "undefined")
            return global;

        return false;
    }

    /**
     * getDocument
     * This function is used in order to get the document object reference.
     * @return  {Object}  The document object if client side, false otherwise.
     */
    static getDocument()
    {
        let env = Env.getSelf();

        if (env)
            return env.document;

        return false;
    }

    /**
     * getNavigator
     * This function is used in order to get the navigator object reference.
     * @return  {Object}  The navigator object if client side, false otherwise.
     */
    static getNavigator()
    {
        let env = Env.getSelf();

        if (env)
            return env.navigator;

        return false;
    }

    /**
     * getAppVersion
     * This function is used in order to get the application version of the current browser.
     * @return  {String}  The application version as a lower case string.
     */
    static getAppVersion()
    {
        let navigator = Env.getNavigator();

        if (navigator)
            return (navigator.appVersion || '').toLowerCase();
    }

    /**
     * getUserAgent
     * This function is used in order to get the user agent of the current browser.
     * @return  {String}  The user agent as a lower case string.
     */
    static getUserAgent()
    {
        let navigator = Env.getNavigator();

        if (navigator)
            return (navigator.userAgent || '').toLowerCase();
    }

    /**
     * getVendor
     * This function is used in order to get the vendor of the current browser.
     * @return  {String}  The vendor as a lower case string.
     */
    static getVendor()
    {
        let navigator = Env.getNavigator();

        if (navigator)
            return (navigator.vendor || '').toLowerCase();
    }

    /**
     * compareVersion
     * This function is used in order to compare number version of given environment, internal use only.
     * @param   {String}   version The actual version of the environment.
     * @param   {Number}   range The reference version to compare with.
     * @return  {Boolean}  True if provided version match actual version of given environment, false otherwise.
     */
    static compareVersion(version, range)
    {
        var comparator =
        {
            '<': function(a, b) { return a < b; },
            '<=': function(a, b) { return a <= b; },
            '>': function(a, b) { return a > b; },
            '>=': function(a, b) { return a >= b; }
        };

        var string = (range + '');
        var n = +(string.match(/\d+/) || NaN);
        var op = string.match(/^[<>]=?|/)[0];

        return comparator[op] ? comparator[op](version, n) : (version == n || n !== n);
    }

    /**
     * isAndroid
     * This function is used in order to know if current environment uses Android.
     * @return  {Boolean} True if current environment uses Android, false otherwise.
     */
    static isAndroid()
    {
        return /android/.test(Env.getUserAgent());
    }

    /**
     * isAndroidPhone
     * This function is used in order to know if current device is an Android phone.
     * @return  {Boolean} True if current device is an Android phone, false otherwise.
     */
    static isAndroidPhone()
    {
        return Env.isAndroid() && /mobile/.test(Env.getUserAgent());
    }

    /**
     * isAndroidTablet
     * This function is used in order to know if current device is an Android tablet.
     * @return  {Boolean} True if current device is an Android tablet, false otherwise.
     */
    static isAndroidTablet()
    {
        return Env.isAndroid() && !/mobile/.test(Env.getUserAgent());
    }

    /**
     * isBlackberry
     * This function is used in order to know if current device is a Blackberry.
     * @return  {Boolean} True if current device is a Blackberry, false otherwise.
     */
    static isBlackberry()
    {
        let userAgent = Env.getUserAgent();

        return /blackberry/.test(userAgent) || /bb10/.test(userAgent);
    }

    /**
     * isChrome
     * This function is used in order to know if current browser is Google Chrome.
     * @return  {Boolean} True if current browser is Google Chrome, false otherwise.
     */
    static isChrome(range)
    {
        let userAgent = Env.getUserAgent();
        let match = /google inc/.test(Env.getVendor()) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;

        return match !== null && !Env.isOpera() && Env.compareVersion(match[1], range);
    }

    /**
     * isDesktop
     * This function is used in order to know if current environment is a desktop one.
     * @return  {Boolean} True if current environment is a desktop one, false otherwise.
     */
    static isDesktop()
    {
        return !Env.isMobile() && !Env.isTablet();
    }

    /**
     * isEdge
     * This function is used in order to know if current browser is Microsoft Edge.
     * @return  {Boolean} True if current browser is Microsoft Edge, false otherwise.
     */
    static isEdge(range)
    {
        var match = Env.getUserAgent().match(/edge\/(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isFirefox
     * This function is used in order to know if current browser is Mozilla Firefox.
     * @return  {Boolean} True if current browser is Mozilla Firefox, false otherwise.
     */
    static isFirefox(range)
    {
        var match = Env.getUserAgent().match(/(?:firefox|fxios)\/(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isInternetExplorer
     * This function is used in order to know if current browser is Internet Explorer.
     * @return  {Boolean} True if current browser is Internet Explorer, false otherwise.
     */
    static isInternetExplorer(range)
    {
        var match = Env.getUserAgent().match(/(?:msie |trident.+?; rv:)(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isIOS
     * This function is used in order to know if current environment uses iOS.
     * @return  {Boolean} True if current environment uses iOS, false otherwise.
     */
    static isIOS()
    {
        return Env.isIphone() || Env.isIpad() || Env.isIpod();
    }

    /**
     * isIpad
     * This function is used in order to know if current device is an iPad.
     * @return  {Boolean} True if current device is an iPad, false otherwise.
     */
    static isIpad(range)
    {
        var match = Env.getUserAgent().match(/ipad.+?os (\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isIphone
     * This function is used in order to know if current device is an iPhone.
     * @return  {Boolean} True if current device is an iPhone, false otherwise.
     */
    static isIphone(range)
    {
        // avoid false positive for Facebook in-app browser on ipad;
        // original iphone doesn't have the OS portion of the UA
        var match = Env.isIpad() ? null : Env.getUserAgent().match(/iphone(?:.+?os (\d+))?/);

        return match !== null && Env.compareVersion(match[1] || 1, range);
    }

    /**
     * isIpod
     * This function is used in order to know if current device is an iPod.
     * @return  {Boolean} True if current device is an iPod, false otherwise.
     */
    static isIpod(range)
    {
        var match = Env.getUserAgent().match(/ipod.+?os (\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isLinux
     * This function is used in order to know if current environment uses Linux.
     * @return  {Boolean} True if current environment uses Linux, false otherwise.
     */
    static isLinux()
    {
        return /linux/.test(Env.getAppVersion());
    }

    /**
     * isMac
     * This function is used in order to know if current device is a mac.
     * @return  {Boolean} True if current device is a mac, false otherwise.
     */
    static isMac()
    {
        return /mac/.test(Env.getAppVersion());
    }

    /**
     * isMobile
     * This function is used in order to know if current environment is a mobile one.
     * @return  {Boolean} True if current environment is a mobile one, false otherwise.
     */
    static isMobile()
    {
        return Env.isIphone() || Env.isIpod() || Env.isAndroidPhone() || Env.isBlackberry() || Env.isWindowsPhone();
    }

    /**
     * isOffline
     * This function is used in order to know if current device is offline (ie has not internet access at the moment).
     * @return  {Boolean} True if current device is offline, false otherwise.
     */
    static isOffline()
    {
        return !Env.isOnline();
    }

    /**
     * isObline
     * This function is used in order to know if current device is online (ie has internet access at the moment).
     * @return  {Boolean} True if current device is online, false otherwise.
     */
    static isOnline()
    {
        let navigator = Env.getNavigator();

        return !navigator || navigator.onLine === true;
    }

    /**
     * isOpera
     * This function is used in order to know if current browser is Opera.
     * @return  {Boolean} True if current browser is Opera, false otherwise.
     */
    static isOpera()
    {
        var match = Env.getUserAgent().match(/(?:^opera.+?version|opr)\/(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isPhantom
     * This function is used in order to know if current browser is PhantomJS.
     * @return  {Boolean} True if current browser is PhantomJS, false otherwise.
     */
    static isPhantom(range)
    {
        var match = Env.getUserAgent().match(/phantomjs\/(\d+)/);

        return match !== null && compareVersion(match[1], range);
    }

    /**
     * isSafari
     * This function is used in order to know if current browser is Safari.
     * @return  {Boolean} True if current browser is Safari, false otherwise.
     */
    static isSafari(range)
    {
        var match = Env.getUserAgent().match(/version\/(\d+).+?safari/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isTablet
     * This function is used in order to know if current environment is a tablet one.
     * @return  {Boolean} True if current environment is a tablet one, false otherwise.
     */
    static isTablet()
    {
        return Env.isIpad() || Env.isAndroidTablet() || Env.isWindowsTablet();
    }

    /**
     * isTouchDevice
     * This function is used in order to know if current device is a touch device.
     * @return  {Boolean} True if current device is a touch device, false otherwise.
     */
    static isTouchDevice()
    {
        let env = Env.getSelf(), d = Env.getDocument();

        return !!d && ('ontouchstart' in env || ('DocumentTouch' in env && d instanceof DocumentTouch));
    }

    /**
     * isWindows
     * This function is used in order to know if current environment uses Windows.
     * @return  {Boolean} True if current environment uses Windows, false otherwise.
     */
    static isWindows()
    {
        return /win/.test(Env.getAppVersion());
    }

    /**
     * isWindowsPhone
     * This function is used in order to know if current device is a Windows phone.
     * @return  {Boolean} True if current device is a Windows phone, false otherwise.
     */
    static isWindowsPhone()
    {
        return Env.isWindows() && /phone/.test(Env.getUserAgent());
    }

    /**
     * isWindowsTablet
     * This function is used in order to know if current device is a Windows tablet.
     * @return  {Boolean} True if current device is a Windows tablet, false otherwise.
     */
    static isWindowsTablet()
    {
        return Env.isWindows() && !Env.isWindowsPhone() && /touch/.test(Env.getUserAgent());
    }
};

module.exports = {
    Collection: Collection,
    Arr: Arr,
    Func: Func,
    Num: Num,
    Str: Str,
    Utility: Utility,
    Env: Env
};
