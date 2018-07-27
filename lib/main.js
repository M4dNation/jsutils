class Env {};

Env.isIOS = require("./env/isIOS.js");
Env.isMac = require("./env/isMac.js");
Env.isIpad = require("./env/isIpad.js");
Env.getEnv = require("./env/getEnv.js");
Env.isEdge = require("./env/isEdge.js");
Env.isIpod = require("./env/isIpod.js");
Env.isLinux = require("./env/isLinux.js");
Env.getSelf = require("./env/getSelf.js");
Env.isOpera = require("./env/isOpera.js");
Env.isIphone = require("./env/isIphone.js");
Env.isChrome = require("./env/isChrome.js");
Env.isMobile = require("./env/isMobile.js");
Env.isOnline = require("./env/isOnline.js");
Env.isSafari = require("./env/isSafari.js");
Env.isTablet = require("./env/isTablet.js");
Env.getGlobal = require("./env/getGlobal.js");
Env.getVendor = require("./env/getVendor.js");
Env.isAndroid = require("./env/isAndroid.js");
Env.isDesktop = require("./env/isDesktop.js");
Env.isFirefox = require("./env/isFirefox.js");
Env.isOffline = require("./env/isOffline.js");
Env.isPhantom = require("./env/isPhantom.js");
Env.isWindows = require("./env/isWindows.js");
Env.getDocument = require("./env/getDocument.js");
Env.getNavigator = require("./env/getNavigator.js");
Env.getUserAgent = require("./env/getUserAgent.js");
Env.isBlackberry = require("./env/isBlackberry.js");
Env.getAppVersion = require("./env/getAppVersion.js");
Env.isTouchDevice = require("./env/isTouchDevice.js");
Env.isAndroidPhone = require("./env/isAndroidPhone.js");
Env.isWindowsPhone = require("./env/isWindowsPhone.js");
Env.isAndroidTable = require("./env/isAndroidTablet.js");
Env.isWindowsTablet = require("./env/isWindowsTablet.js");
Env.getWindowObject = require("./env/getWindowObject.js");
Env.isInternetExplore = require("./env/isInternetExplorer.js");

class Arr {};

Arr.at = require("./array/at.js");
Arr.zip = require("./array/zip.js");
Arr.last = require("./array/last.js");
Arr.tail = require("./array/tail.js");
Arr.take = require("./array/take.js");
Arr.union = require("./array/union.js");
Arr.remove = require("./array/remove.js");
Arr.unique = require("./array/unique.js");
Arr.indexOf = require("./array/indexOf.js");
Arr.initial = require("./array/initial.js");
Arr.without = require("./array/without.js");
Arr.toObject = require("./array/toObject.js");
Arr.difference = require("./array/difference.js");
Arr.lastIndexOf = require("./array/lastIndexOf.js");
Arr.intersection = require("./array/intersection.js");

class Obj {};

Obj.get = require("./object/get.js");
Obj.type = require("./object/type.js");
Obj.build = require("./object/build.js");
Obj.fetch = require("./object/fetch.js");
Obj.isNaN = require("./object/isNaN.js");
Obj.merge = require("./object/merge.js");
Obj.pairs = require("./object/pairs.js");
Obj.isBool = require("./object/isBool.js");
Obj.isChar = require("./object/isChar.js");
Obj.isDate = require("./object/isDate.js");
Obj.isNull = require("./object/isNull.js");
Obj.isTrue = require("./object/isTrue.js");
Obj.parent = require("./object/parent.js");
Obj.howDeep = require("./object/howDeep.js");
Obj.isEqual = require("./object/isEqual.js");
Obj.isError = require("./object/isError.js");
Obj.isArray = require("./object/isArray.js");
Obj.isFalse = require("./object/isFalse.js");
Obj.isFalsy = require("./object/isFalsy.js");
Obj.resolve = require("./object/resolve.js");
Obj.toArray = require("./object/toArray.js");
Obj.isTruthy = require("./object/isTruthy.js");
Obj.isNumber = require("./object/isNumber.js");
Obj.isObject = require("./object/isObject.js");
Obj.isExisty = require("./object/isExisty.js");
Obj.defaults = require("./object/defaults.js");
Obj.isRegExp = require("./object/isRegExp.js");
Obj.isString = require("./object/isString.js");
Obj.isElement = require("./object/isElement.js");
Obj.isFunction = require("./object/isFunction.js");
Obj.isInfinite = require("./object/isInfinite.js");
Obj.isSameType = require("./object/isSameType.js");
Obj.isArguments = require("./object/isArguments.js");
Obj.isUndefined = require("./object/isUndefined.js");
Obj.isPlainObject = require("./object/isPlainObject.js");
Obj.toQueryString = require("./object/toQueryString.js");

class Str {};

Str.ext = require("./string/ext.js");
Str.endWith = require("./string/endWith.js");
Str.include = require("./string/include.js");
Str.isAlpha = require("./string/isAlpha.js");
Str.isAscii = require("./string/isAscii.js");
Str.isSpace =  require("./string/isSpace.js");
Str.isNumeric = require("./string/isNumeric.js");
Str.startWith = require("./string/startWith.js");
Str.capitalize = require("./string/capitalize.js");
Str.htmlDecode = require("./string/htmlDecode.js");
Str.htmlEncode = require("./string/htmlEncode.js");
Str.toCamelCase = require("./string/toCamelCase.js");
Str.urlFriendly = require("./string/urlFriendly.js");
Str.isLowerCase = require("./string/isLowerCase.js");
Str.isUpperCase = require("./string/isUpperCase.js");
Str.isPalindrome = require("./string/isPalindrome.js");
Str.isCapitalized = require("./string/isCapitalized.js");
Str.isHexadecimal = require("./string/isHexadecimal.js");
Str.isAlphanumeric = require("./string/isAlphanumeric.js");
Str.fromQueryString = require("./string/fromQueryString.js");

class Num {};

Num.gt = require("./number/gt.js");
Num.lt = require("./number/lt.js");
Num.lte = require("./number/lte.js");
Num.gte = require("./number/gte.js");
Num.isOdd = require("./number/isOdd.js");
Num.isOne = require("./number/isOne.js");
Num.range = require("./number/range.js");
Num.isZero = require("./number/isZero.js");
Num.isEven = require("./number/isEven.js");
Num.isTimes = require("./number/isTimes.js");
Num.isDouble = require("./number/isDouble.js");
Num.isFinite = require("./number/isFinite.js");
Num.isTriple = require("./number/isTriple.js");
Num.isWithin = require("./number/isWithin.js");
Num.isDecimal = require("./number/isDecimal.js");
Num.isInteger = require("./number/isInteger.js");
Num.isNegative = require("./number/isNegative.js");
Num.isPositive = require("./number/isPositive.js");

class Func {};

Func.once = require("./function/once.js");
Func.after = require("./function/after.js");
Func.defer = require("./function/defer.js");
Func.delay = require("./function/delay.js");
Func.times = require("./function/times.js");
Func.compose = require("./function/compose.js");
Func.memoize = require("./function/memoize.js");
Func.debounce = require("./function/debounce.js");
Func.throttle = require("./function/throttle.js");

class Utility {};

Utility.isIp = require("./utility/isIp.js");
Utility.isURL = require("./utility/isURL.js");
Utility.value = require("./utility/value.js");
Utility.isPort = require("./utility/isPort.js");
Utility.isFQDN = require("./utility/isFQDN.js");
Utility.isHash = require("./utility/isHash.js");
Utility.hexToRgb = require("./utility/hexToRgb.js");
Utility.identity = require("./utility/identity.js");
Utility.language = require("./utility/language.js");
Utility.rgbToHex = require("./utility/rgbToHex.js");
Utility.isDataURI = require("./utility/isDataURI.js");
Utility.flagEncode = require("./utility/flagEncode.js");
Utility.flagDecode = require("./utility/flagDecode.js");
Utility.isHexColor = require("./utility/isHexColor.js");

class Collection {};

Collection.add = require("./collection/add.js");
Collection.all = require("./collection/all.js");
Collection.any = require("./collection/any.js");
Collection.has = require("./collection/has.js");
Collection.len = require("./collection/len.js");
Collection.map = require("./collection/map.js");
Collection.max = require("./collection/max.js");
Collection.min = require("./collection/min.js");
Collection.set = require("./collection/set.js");
Collection.sum = require("./collection/sum.js");
Collection.size = require("./collection/size.js");
Collection.deep = require("./collection/deep.js");
Collection.each = require("./collection/each.js");
Collection.find = require("./collection/find.js");
Collection.most = require("./collection/most.js");
Collection.none = require("./collection/none.js");
Collection.keys = require("./collection/keys.js");
Collection.where = require("./collection/where.js");
Collection.clear = require("./collection/clear.js");
Collection.clone = require("./collection/clone.js");
Collection.count = require("./collection/count.js");
Collection.empty = require("./collection/empty.js");
Collection.least = require("./collection/least.js");
Collection.sortBy = require("./collection/sortBy.js");
Collection.values = require("./collection/values.js");
Collection.filter = require("./collection/filter.js");
Collection.invert = require("./collection/invert.js");
Collection.invoke = require("./collection/invoke.js");
Collection.sample = require("./collection/sample.js");
Collection.reject = require("./collection/reject.js");
Collection.countBy = require("./collection/countBy.js");
Collection.findKey = require("./collection/findKey.js");
Collection.flatten = require("./collection/flatten.js");
Collection.average = require("./collection/average.js");
Collection.compact = require("./collection/compact.js");
Collection.groupBy = require("./collection/groupBy.js");
Collection.shuffle = require("./collection/shuffle.js");
Collection.isEmpty = require("./collection/isEmpty.js");
Collection.replace = require("./collection/replace.js");
Collection.contains = require("./collection/contains.js");
Collection.groupsOf = require("./collection/groupsOf.js");
Collection.isUnique = require("./collection/isUnique.js");
Collection.blacklist = require("./collection/blacklist.js");
Collection.getByType = require("./collection/getByType.js");
Collection.whitelist = require("./collection/whitelist.js");
Collection.whereFirst = require("./collection/whereFirst.js");
Collection.setUndefined = require("./collection/setUndefined.js");

module.exports = {
    Env,
    Arr,
    Obj,
    Str,
    Num,
    Func,
    Utility,
    Collection
};
