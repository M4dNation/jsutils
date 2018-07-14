var assert = require("assert");
const Obj = require("../jstoolbox.js").Obj;

describe("Object Methods", function()
{
    describe("toArray", function()
    {
        it("Should transform a simple object into an array.", function()
        {
            let obj = {0: "test"};

            let result = Obj.toArray(obj);
            let expectedResult = ["test"];
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("defaults", function()
    {
        it("Should set default value to an object.", function()
        {
            let obj = {0: "test", 1: "titi"};

            let def = {0: "toto", 2: "tata"};

            let result = Obj.defaults(obj, def);
            let expectedResult = {0: "test", 1: "titi", 2: "tata"};

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("merge", function()
    {
        it("Should merge two objects in one.", function()
        {
            let obj1 = {0: "test"};
            let obj2 = {1: "titi"};

            let result = Obj.merge(obj1, obj2);

            let expectedResult = {0: "test", 1: "titi"};

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("get", function()
    {
        it("Should get a value at a specified key.", function()
        {
            let obj = {0: "test", 'titi': "tata"};

            let result = Obj.get(obj, 'titi');

            assert.strictEqual(result, "tata");
        });

        it("Should not get a value at an unknown key.", function()
        {
            let obj = {0: "test", 'titi': "tata"};

            let result = Obj.get(obj, 'tutu');

            assert.strictEqual(result, undefined);
        });
    });

    describe("howDeep", function()
    {
        it("Should find the depth level of a specified key.", function()
        {
            let obj = {0: {1: {2: 'Green'}}};

            let result = Obj.howDeep(obj, 2);

            assert.strictEqual(result, 3);
        });

        it("Should not find the depth level of an unknown key.", function()
        {
            let obj = {0: {1: {2: 'Green'}}};

            console.log("How deep execution");
            let result = Obj.howDeep(obj, 0);

            assert.strictEqual(result, undefined);
        });
    });

    describe("isArguments", function()
    {
        it("Should be able to say arguments is arguments.", function()
        {
            let result = Obj.isArguments(arguments);
            assert.strictEqual(result, true);
        });
        it("Should be able to say zero is not arguments.", function()
        {
            let result = Obj.isArguments(0);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not arguments.", function()
        {
            let result = Obj.isArguments("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not arguments.", function()
        {
            let result = Obj.isArguments(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not arguments.", function()
        {
            let result = Obj.isArguments(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not arguments.", function()
        {
            let result = Obj.isArguments(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say false is not arguments.", function()
        {
            let result = Obj.isArguments(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not arguments.", function()
        {
            let result = Obj.isArguments(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not arguments.", function()
        {
            let result = Obj.isArguments(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not arguments.", function()
        {
            let result = Obj.isArguments(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not arguments.", function()
        {
            let result = Obj.isArguments("tata");
            assert.strictEqual(result, false);
        });

        it("Should be able to say object is not arguments.", function()
        {
            let result = Obj.isArguments({});
            assert.strictEqual(result, false);
        });
    });

    

    describe("isDate", function()
    {
        it("Should be able to say a date object is a date.", function()
        {
            let result = Obj.isDate(new Date());
            assert.strictEqual(result, true);
        });

        it("Should be able to say false is not a date.", function()
        {
            let result = Obj.isDate(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not a date.", function()
        {
            let result = Obj.isDate(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say an array is not a date.", function()
        {
            let result = Obj.isDate([]);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not a date.", function()
        {
            let result = Obj.isDate("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not a date.", function()
        {
            let result = Obj.isDate(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not a date.", function()
        {
            let result = Obj.isDate(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not a date.", function()
        {
            let result = Obj.isDate(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not a date.", function()
        {
            let result = Obj.isDate(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not a date.", function()
        {
            let result = Obj.isDate(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not a date.", function()
        {
            let result = Obj.isDate("tata");
            assert.strictEqual(result, false);
        });

        it("Should be able to say object is not a date.", function()
        {
            let result = Obj.isDate({});
            assert.strictEqual(result, false);
        });
    });

    describe("isElement", function()
    {
        it("Should be able to say a date object is not an HTML DOM element.", function()
        {
            let result = Obj.isElement(new Date());
            assert.strictEqual(result, false);
        });

        it("Should be able to say false is not an HTML DOM element.", function()
        {
            let result = Obj.isElement(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not an HTML DOM element.", function()
        {
            let result = Obj.isElement(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say an array is not an HTML DOM element.", function()
        {
            let result = Obj.isElement([]);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not an HTML DOM element.", function()
        {
            let result = Obj.isElement("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not an HTML DOM element.", function()
        {
            let result = Obj.isElement(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not an HTML DOM element.", function()
        {
            let result = Obj.isElement(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not an HTML DOM element.", function()
        {
            let result = Obj.isElement(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not an HTML DOM element.", function()
        {
            let result = Obj.isElement(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not an HTML DOM element.", function()
        {
            let result = Obj.isElement(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not an HTML DOM element.", function()
        {
            let result = Obj.isElement("tata");
            assert.strictEqual(result, false);
        });

        it("Should be able to say object is not an HTML DOM element.", function()
        {
            let result = Obj.isElement({});
            assert.strictEqual(result, false);
        });
    });

    describe("isEqual", function()
    {
        it("Should be able to say if two numbers are equals.", function()
        {
            let result = Obj.isEqual(1,1);
            assert.strictEqual(result, true);
        });

        it("Should be able to say if two strings are equals.", function()
        {
            let result = Obj.isEqual("test", "test");
            assert.strictEqual(result, true);
        });

        it("Should be able to say if two object are equals.", function()
        {
            let obj1 = {"test": "titi", "tutu": "tata"};
            let obj2 = {"test": "titi", "tutu": "tata"};

            let result = Obj.isEqual(obj1, obj2);
            assert.strictEqual(result, true);
        });

        it("Should be able to say if two object are not equals.", function()
        {
            let obj1 = {"test": "titi", "tutu": "tata"};
            let obj2 = {"test": "titi", "tutu": "tata", "toto": "tyty"};


            let result = Obj.isEqual(obj1, obj2);
            assert.strictEqual(result, false);
        });

        it("Should be able to say if two arrays are equals.", function()
        {
            let arr1 = [1,2,3,4];
            let arr2 = [1,2,3,4];

            let result = Obj.isEqual(arr1, arr2);

            assert.strictEqual(result, true);
        });

        it("Should be able to say if two arrays with strings are equals.", function()
        {
            let arr1 = ["titi", "tutu", "toto"];
            let arr2 = ["titi", "tutu", "toto"];

            let result = Obj.isEqual(arr1, arr2);

            assert.strictEqual(result, true);
        });

        it("Should be able to say if two arrays are not equals.", function()
        {
            let arr1 = [1,2,3,4];
            let arr2 = [1,2,3,4,5];

            let result = Obj.isEqual(arr1, arr2);

            assert.strictEqual(result, false);
        });

        it("Should be able to say if two arrays with strings are not equals.", function()
        {
            let arr1 = ["titi", "tutu", "toto"];
            let arr2 = ["titi", "tutu", "tata"];

            let result = Obj.isEqual(arr1, arr2);

            assert.strictEqual(result, false);
        });
    });

    describe("isFalsy", function()
    {
        it("Should be able to say zero is falsy.", function()
        {
            let result = Obj.isFalsy(0);
            assert.strictEqual(result, true);
        });

        it("Should be able to say empty string is falsy.", function()
        {
            let result = Obj.isFalsy("");
            assert.strictEqual(result, true);
        });

        it("Should be able to say null is falsy.", function()
        {
            let result = Obj.isFalsy(null);
            assert.strictEqual(result, true);
        });

        it("Should be able to say undefined is falsy.", function()
        {
            let result = Obj.isFalsy(undefined);
            assert.strictEqual(result, true);
        });

        it("Should be able to say NaN is falsy.", function()
        {
            let result = Obj.isFalsy(NaN);
            assert.strictEqual(result, true);
        });

        it("Should be able to say false is falsy.", function()
        {
            let result = Obj.isFalsy(false);
            assert.strictEqual(result, true);
        });

        it("Should be able to say true is not falsy.", function()
        {
            let result = Obj.isFalsy(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not falsy.", function()
        {
            let result = Obj.isFalsy(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not falsy.", function()
        {
            let result = Obj.isFalsy(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not falsy.", function()
        {
            let result = Obj.isFalsy("tata");
            assert.strictEqual(result, false);
        });
    });

    describe("isFalse", function()
    {
        it("Should be able to say false is false.", function()
        {
            let result = Obj.isFalse(false);
            assert.strictEqual(result, true);
        });

        it("Should be able to say true is not false.", function()
        {
            let result = Obj.isFalse(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say zero is not false.", function()
        {
            let result = Obj.isFalse(0);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not false.", function()
        {
            let result = Obj.isFalse("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not false.", function()
        {
            let result = Obj.isFalse(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not false.", function()
        {
            let result = Obj.isFalse(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not false.", function()
        {
            let result = Obj.isFalse(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not false.", function()
        {
            let result = Obj.isFalse(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not false.", function()
        {
            let result = Obj.isFalse(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not false.", function()
        {
            let result = Obj.isFalse("tata");
            assert.strictEqual(result, false);
        });
    });

    describe("isTrue", function()
    {
        it("Should be able to say true is true.", function()
        {
            let result = Obj.isTrue(true);
            assert.strictEqual(result, true);
        });

        it("Should be able to say false is not true.", function()
        {
            let result = Obj.isTrue(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say zero is not true.", function()
        {
            let result = Obj.isTrue(0);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not true.", function()
        {
            let result = Obj.isTrue("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not true.", function()
        {
            let result = Obj.isTrue(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not true.", function()
        {
            let result = Obj.isTrue(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not true.", function()
        {
            let result = Obj.isTrue(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not true.", function()
        {
            let result = Obj.isTrue(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not true.", function()
        {
            let result = Obj.isTrue(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not true.", function()
        {
            let result = Obj.isTrue("tata");
            assert.strictEqual(result, false);
        });
    });

    describe("isInfinite", function()
    {
        it("Should be able to say Infinity is infinite.", function()
        {
            let result = Obj.isInfinite(Infinity);
            assert.strictEqual(result, true);
        });

        it("Should be able to say -Infinity is infinite.", function()
        {
            let result = Obj.isInfinite(-Infinity);
            assert.strictEqual(result, true);
        });

        it("Should be able to say a date object is not infinite.", function()
        {
            let result = Obj.isInfinite(new Date());
            assert.strictEqual(result, false);
        });

        it("Should be able to say false is not infinite.", function()
        {
            let result = Obj.isInfinite(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not infinite.", function()
        {
            let result = Obj.isInfinite(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say an array is not infinite.", function()
        {
            let result = Obj.isInfinite([]);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not infinite.", function()
        {
            let result = Obj.isInfinite("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not infinite.", function()
        {
            let result = Obj.isInfinite(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not infinite.", function()
        {
            let result = Obj.isInfinite(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not infinite.", function()
        {
            let result = Obj.isInfinite(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not infinite.", function()
        {
            let result = Obj.isInfinite(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not infinite.", function()
        {
            let result = Obj.isInfinite(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not infinite.", function()
        {
            let result = Obj.isInfinite("tata");
            assert.strictEqual(result, false);
        });

        it("Should be able to say object is not infinite.", function()
        {
            let result = Obj.isInfinite({});
            assert.strictEqual(result, false);
        });
    });

    describe("isFunction", function()
    {
        it("Should be able to say a function is a function.", function()
        {
            let result = Obj.isFunction(function(){});
            assert.strictEqual(result, true);
        });

        it("Should be able to say a date object is not a function.", function()
        {
            let result = Obj.isFunction(new Date());
            assert.strictEqual(result, false);
        });

        it("Should be able to say false is not a function.", function()
        {
            let result = Obj.isFunction(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not a function.", function()
        {
            let result = Obj.isFunction(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say an array is not a function.", function()
        {
            let result = Obj.isFunction([]);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not a function.", function()
        {
            let result = Obj.isFunction("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not a function.", function()
        {
            let result = Obj.isFunction(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not a function.", function()
        {
            let result = Obj.isFunction(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not a function.", function()
        {
            let result = Obj.isFunction(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not a function.", function()
        {
            let result = Obj.isFunction(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not a function.", function()
        {
            let result = Obj.isFunction(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not a function.", function()
        {
            let result = Obj.isFunction("tata");
            assert.strictEqual(result, false);
        });

        it("Should be able to say object is not a function.", function()
        {
            let result = Obj.isFunction({});
            assert.strictEqual(result, false);
        });
    });

    describe("isNan", function()
    {
        it("Should be able to say NaN is NaN.", function()
        {
            let result = Obj.isNaN(NaN);
            assert.strictEqual(result, true);
        });

        it("Should be able to say a date object is not a NaN.", function()
        {
            let result = Obj.isNaN(new Date());
            assert.strictEqual(result, false);
        });

        it("Should be able to say false is not a NaN.", function()
        {
            let result = Obj.isNaN(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not a NaN.", function()
        {
            let result = Obj.isNaN(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say an array is not a NaN.", function()
        {
            let result = Obj.isNaN([]);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not a NaN.", function()
        {
            let result = Obj.isNaN("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not a NaN.", function()
        {
            let result = Obj.isNaN(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not a NaN.", function()
        {
            let result = Obj.isNaN(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not a NaN.", function()
        {
            let result = Obj.isNaN(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not a NaN.", function()
        {
            let result = Obj.isNaN(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not a NaN.", function()
        {
            let result = Obj.isNaN("tata");
            assert.strictEqual(result, false);
        });

        it("Should be able to say object is not a NaN.", function()
        {
            let result = Obj.isNaN({});
            assert.strictEqual(result, false);
        });
    });

    describe("isNull", function()
    {
        it("Should be able to say null is Null.", function()
        {
            let result = Obj.isNull(null);
            assert.strictEqual(result, true);
        });

        it("Should be able to say a date object is not Null.", function()
        {
            let result = Obj.isNull(new Date());
            assert.strictEqual(result, false);
        });

        it("Should be able to say false is not Null.", function()
        {
            let result = Obj.isNull(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not Null.", function()
        {
            let result = Obj.isNull(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say an array is not Null.", function()
        {
            let result = Obj.isNull([]);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not Null.", function()
        {
            let result = Obj.isNull("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not Null.", function()
        {
            let result = Obj.isNull(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not Null.", function()
        {
            let result = Obj.isNull(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not Null.", function()
        {
            let result = Obj.isNull(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not Null.", function()
        {
            let result = Obj.isNull(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not Null.", function()
        {
            let result = Obj.isNull("tata");
            assert.strictEqual(result, false);
        });

        it("Should be able to say object is not Null.", function()
        {
            let result = Obj.isNull({});
            assert.strictEqual(result, false);
        });
    });

    describe("isObject", function()
    {
        it("Should be able to say object is an object.", function()
        {
            let result = Obj.isObject({});
            assert.strictEqual(result, true);
        });

        it("Should be able to say a date object is an object.", function()
        {
            let result = Obj.isObject(new Date());
            assert.strictEqual(result, true);
        });

        it("Should be able to say an array is an object.", function()
        {
            let result = Obj.isObject([]);
            assert.strictEqual(result, true);
        });

        it("Should be able to say null is an object.", function()
        {
            let result = Obj.isObject(null);
            assert.strictEqual(result, true);
        });

        it("Should be able to say false is not an object.", function()
        {
            let result = Obj.isObject(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not an object.", function()
        {
            let result = Obj.isObject(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not an object.", function()
        {
            let result = Obj.isObject("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not an object.", function()
        {
            let result = Obj.isObject(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not an object.", function()
        {
            let result = Obj.isObject(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not an object.", function()
        {
            let result = Obj.isObject(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not an object.", function()
        {
            let result = Obj.isObject(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not an object.", function()
        {
            let result = Obj.isObject("tata");
            assert.strictEqual(result, false);
        });
    });

    describe("isRegExp", function()
    {
        it("Should be able to say object is not a regular expression.", function()
        {
            let result = Obj.isRegExp({});
            assert.strictEqual(result, false);
        });

        it("Should be able to say a date object is not a regular expression.", function()
        {
            let result = Obj.isRegExp(new Date());
            assert.strictEqual(result, false);
        });

        it("Should be able to say false is not a regular expression.", function()
        {
            let result = Obj.isRegExp(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not a regular expression.", function()
        {
            let result = Obj.isRegExp(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say an array is not a regular expression.", function()
        {
            let result = Obj.isRegExp([]);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not a regular expression.", function()
        {
            let result = Obj.isRegExp("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not a regular expression.", function()
        {
            let result = Obj.isRegExp(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say undefined is not a regular expression.", function()
        {
            let result = Obj.isRegExp(undefined);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not a regular expression.", function()
        {
            let result = Obj.isRegExp(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not a regular expression.", function()
        {
            let result = Obj.isRegExp(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not a regular expression.", function()
        {
            let result = Obj.isRegExp(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not a regular expression.", function()
        {
            let result = Obj.isRegExp("tata");
            assert.strictEqual(result, false);
        });
    });

    describe("isUndefined", function()
    {
        it("Should be able to say undefined is undefined.", function()
        {
            let result = Obj.isUndefined(undefined);
            assert.strictEqual(result, true);
        });

        it("Should be able to say a date object is not undefined.", function()
        {
            let result = Obj.isUndefined(new Date());
            assert.strictEqual(result, false);
        });

        it("Should be able to say false is not undefined.", function()
        {
            let result = Obj.isUndefined(false);
            assert.strictEqual(result, false);
        });

        it("Should be able to say true is not undefined.", function()
        {
            let result = Obj.isUndefined(true);
            assert.strictEqual(result, false);
        });

        it("Should be able to say an array is not undefined.", function()
        {
            let result = Obj.isUndefined([]);
            assert.strictEqual(result, false);
        });

        it("Should be able to say empty string is not undefined.", function()
        {
            let result = Obj.isUndefined("");
            assert.strictEqual(result, false);
        });

        it("Should be able to say null is not undefined.", function()
        {
            let result = Obj.isUndefined(null);
            assert.strictEqual(result, false);
        });

        it("Should be able to say NaN is not undefined.", function()
        {
            let result = Obj.isUndefined(NaN);
            assert.strictEqual(result, false);
        });

        it("Should be able to say 110 is not undefined.", function()
        {
            let result = Obj.isUndefined(110);
            assert.strictEqual(result, false);
        });

        it("Should be able to say -13 is not undefined.", function()
        {
            let result = Obj.isUndefined(-13);
            assert.strictEqual(result, false);
        });

        it("Should be able to say tata is not undefined.", function()
        {
            let result = Obj.isUndefined("tata");
            assert.strictEqual(result, false);
        });

        it("Should be able to say object is not undefined.", function()
        {
            let result = Obj.isUndefined({});
            assert.strictEqual(result, false);
        });
    });

    describe("build", function()
    {
        it("Should transform a namespace into an object.", function()
        {
            let result = Obj.build("a.b.c");
            let expectedResult = {a: {b: {c: {}}}};

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("pairs", function()
    {
        it("Should get property name and value as pairs.", function()
        {
            let obj = {"test": "titi"};
            let result = Obj.pairs(obj);
            let expectedResult = [["test", "titi"]];

            assert.strictEqual(Obj.isArray(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("parent", function()
    {
        it("Should retrieve the nested object of a parent one.", function()
        {
            let obj = {color: {red: {val: {rgb: '#F00'}}}};
            let result = Obj.parent(obj, "val");
            let expectedResult = {val: {rgb: '#F00'}};

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("pluck", function()
    {
        it("Should fetch properties.", function()
        {
            let col = [{color: 'red', hex: '#F00'}, {color: 'blue', hex: '#00F'}, {color: 'green', hex: '#0F0'}];
            let result = Obj.pluck(col, "color");

            let expectedResult = ["red", "blue", "green"];

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("fetch", function()
    {
        it("Should fetch properties.", function()
        {
            let col = [{color: 'red', hex: '#F00'}, {color: 'blue', hex: '#00F'}, {color: 'green', hex: '#0F0'}];
            let result = Obj.pluck(col, "color");

            let expectedResult = ["red", "blue", "green"];

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("resolve", function()
    {
        it("Should find a value.", function()
        {
            let obj = {colors: {red: {vals: {rgb: '#F00', hsl: '0, 100, 50'}}}};
            let result = Obj.resolve(obj, "colors.red.vals.rgb");

            assert.strictEqual(result, "#F00");
        });

        it("Should find a namespace.", function()
        {
            let obj = {colors: {red: {vals: {rgb: '#F00', hsl: '0, 100, 50'}}}};
            let result = Obj.resolve(obj, "rgb", true);

            assert.strictEqual(result, "colors.red.vals.rgb");
        });
    });

    describe("toQueryString", function()
    {
        it("Should create a valid query string.", function()
        {
            let obj = {firstname: 'John', middlename: 'Edgar', lastname: 'Hoover'};
            let result = Obj.toQueryString(obj);
            let expectedResult = "firstname%3DJohn%26middlename%3DEdgar%26lastname%3DHoover";

            assert.strictEqual(result, expectedResult);
        });
    });

    describe("type", function()
    {
        it("Should retrieve the right type.", function()
        {
            let value = function() { return arguments;};

            let result = Obj.type(value());

            assert.strictEqual(result, "arguments");
        });
    });
});
