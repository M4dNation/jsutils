var assert = require("assert");
const Collection = require("../lib/jstoolbox.js").Collection;
const Obj = require("../lib/jstoolbox.js").Obj;
const Utility = require("../lib/jstoolbox.js").Utility;
const Num = require("../lib/jstoolbox.js").Num;

describe("Collection Methods", function()
{
    describe("add", function()
    {
        it("Should be able to add a number to an array.", function()
        {
            let col = [0, 1, 2];
            col = Collection.add(col, 3, 3);

            assert.strictEqual(Obj.isArray(col), true);

            assert.strictEqual(Obj.isEqual(col, [0,1,2,3]), true);
        });

        it("Should be able to add a string to an array.", function()
        {
            let col = [0, 1, 2];
            col = Collection.add(col, 3, "21");

            assert.strictEqual(Obj.isArray(col), true);

            assert.strictEqual(Obj.isEqual(col, [0,1,2,"21"]), true);
        });

        it("Should be able to add a value to an object.", function()
        {
            let col = {};
            col = Collection.add(col, "titi", 5);

            assert.strictEqual(Obj.isObject(col), true);

            assert.strictEqual(Obj.isEqual(col, {"titi": 5}), true);
        });
    });

    describe("all", function()
    {
        it("Should apply function to a collection.", function()
        {
            let col = [0,1,2];
            col = Collection.all(col, Obj.isNumber);

            assert.strictEqual(col, true);
        });
    });

    describe("every", function()
    {
        it("Should apply function to a collection.", function()
        {
            let col = [0,1,2];
            col = Collection.every(col, Obj.isNumber);

            assert.strictEqual(col, true);
        });
    });

    describe("any", function()
    {
        it("Should apply function to a collection.", function()
        {
            let col = [0,1,2];
            col = Collection.any(col, Obj.isNumber);

            assert.strictEqual(col, true);
        });
    });

    describe("some", function()
    {
        it("Should apply function to a collection.", function()
        {
            let col = [0,1,2];
            col = Collection.some(col, Obj.isNumber);

            assert.strictEqual(col, true);
        });
    });

    describe("average", function()
    {
        it("Should calculate the average of an array.", function()
        {
            let col = [0,1,2,3,4,5,6,7,8,9,10];
            let average = Collection.average(col);

            assert.strictEqual(average, 5);
        });

        it("Should calculate the average of the value inside an object.", function()
        {
            let col = {"titi": 99, "toto": 999};
            let average = Collection.average(col);

            assert.strictEqual(average, 549);
        });

        it("Should calculate the average with all numbers tripled .", function()
        {
            let col = [0,1,2,3,4,5,6,7,8,9,10];
            let average = Collection.average(col, function(n){return n * 3;})

            assert.strictEqual(average, 15);
        });
    });


    describe("clear", function()
    {
        it("Should clear an object.", function()
        {
            let col = {"titi" : "toto"};
            col = Collection.clear(col);

            assert.strictEqual(Collection.isEmpty(col), true);
        });

        it("Should clear an array.", function()
        {
            let col = [0,1,2,3,4,5,6,7,8,9,10];
            col = Collection.clear(col);

            assert.strictEqual(Collection.isEmpty(col), true);
        });
    });

    describe("clone", function()
    {
        it("Should copy an object.", function()
        {
            let col = {0: "titi", 1: "toto"};
            let col2 = Collection.clone(col);

            assert.strictEqual(Obj.isEqual(col, col2), true);
        });

        it("Should copy an array.", function()
        {
            let col = [0,1,2,3];
            let col2 = Collection.clone(col);

            assert.strictEqual(Obj.isEqual(col, col2), true);
        });

        it("Should apply function to element after copy.", function()
        {
            let double = function(n)
            {
                return n * 2;
            };

            let col = [0,1,2,3];
            col = Collection.clone(col, double);

            assert.strictEqual(Obj.isEqual([0,2,4,6], col), true);
        });
    });

    describe("compact", function()
    {
        it("Should compact an object.", function()
        {
            let col = {0: "titi", 1: "toto", 2: false};
            col = Collection.compact(col);

            assert.strictEqual(Obj.isEqual(["titi", "toto"], col), true);
        });

        it("Should copy an array.", function()
        {
            let col = [0,1,2,3];
            col = Collection.compact(col);

            assert.strictEqual(Obj.isEqual([1,2,3], col), true);
        });
    });

    describe("contains", function()
    {
        it("Should check if an array contain a value.", function()
        {
            let col = [0,1,2,3];

            assert.strictEqual(Collection.contains(col, 2), true);
        });

        it("Should check if an object contain a value.", function()
        {
            let col = {"titi" : "toto" };

            assert.strictEqual(Collection.contains(col, "toto"), true);
        });
    });

    describe("inArray", function()
    {
        it("Should check if an array contain a value.", function()
        {
            let col = [0,1,2,3];

            assert.strictEqual(Collection.contains(col, 2), true);
        });

        it("Should check if an object contain a value.", function()
        {
            let col = {"titi" : "toto" };

            assert.strictEqual(Collection.contains(col, "toto"), true);
        });
    });

    describe("count", function()
    {
        it("Should count how many number there is in an array.", function()
        {
            let col = [0,1,2,3, "titi"];

            assert.strictEqual(Collection.count(col, Obj.isNumber), 4);
        });

        it("Should count how many number there is in an object.", function()
        {
            let col = {"titi" : "toto", "value": 2 };

            assert.strictEqual(Collection.count(col, Obj.isNumber), 1);
        });
    });

    describe("countBy", function()
    {
        it("Should count how many group there is in a collection.", function()
        {
            let col = {0: 'Red', 1: 'Red', 2: 'Blue'};

            let result = Collection.countBy(col, Utility.identity);
            assert.strictEqual(Obj.isEqual(result, {Red: 2, Blue: 1}), true);
        });
    });

    describe("empty", function()
    {
        it("Should empty an array.", function()
        {
            let col = [0,1,2,3];
            col = Collection.empty(col);

            assert.strictEqual(Obj.isArray(col), true);

            assert.strictEqual(Obj.isEqual(col, [undefined, undefined, undefined, undefined]), true);
        });

        it("Should empty an object.", function()
        {
            let col = {"a": "test"};

            col = Collection.empty(col);

            assert.strictEqual(Obj.isObject(col), true);

            assert.strictEqual(Obj.isEqual(col, {"a": undefined}), true);
        });
    });

    describe("filter", function()
    {
        it("Should find a string in an array.", function()
        {
            let col = [0,1,"test"];

            let result = Collection.filter(col, function(v){ return Obj.isString(v) ? true : false});

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["test"]), true);
        });

        it("Should find a string in an object.", function()
        {
            let col = {"a": 1, "b": "test"};

            let result = Collection.filter(col, function(v){ return Obj.isString(v) ? true : false});

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["test"]), true);
        });
    });

    describe("find", function()
    {
        it("Should find the first string in an array.", function()
        {
            let col = [0,1,"test", "titi"];

            let result = Collection.find(col, function(v){ return Obj.isString(v) ? true : false});

            assert.strictEqual(Obj.isString(result), true);

            assert.strictEqual(Obj.isEqual(result, "test"), true);
        });

        it("Should find the first number in an array.", function()
        {
            let col = [0,1,"test", "titi"];

            let result = Collection.find(col, function(v){ return Obj.isNumber(v) ? true : false});

            assert.strictEqual(Obj.isNumber(result), true);

            assert.strictEqual(Num.isZero(result), true);
        });

        it("Should find the first string in an object.", function()
        {
            let col = {"a": 1, "b": "test", "c": "titi"};

            let result = Collection.find(col, function(v){ return Obj.isString(v) ? true : false});

            assert.strictEqual(Obj.isString(result), true);

            assert.strictEqual(Obj.isEqual(result, "test"), true);
        });

        it("Should find the first number in an object.", function()
        {
            let col = {"a": 1, "b": "test", "c": "titi"};

            let result = Collection.find(col, function(v){ return Obj.isNumber(v) ? true : false});

            assert.strictEqual(Obj.isNumber(result), true);

            assert.strictEqual(Num.isOne(result), true);
        });
    });

    describe("findValue", function()
    {
        it("Should find the first string in an array.", function()
        {
            let col = [0,1,"test", "titi"];

            let result = Collection.find(col, function(v){ return Obj.isString(v) ? true : false});

            assert.strictEqual(Obj.isString(result), true);

            assert.strictEqual(Obj.isEqual(result, "test"), true);
        });

        it("Should find the first number in an array.", function()
        {
            let col = [0,1,"test", "titi"];

            let result = Collection.find(col, function(v){ return Obj.isNumber(v) ? true : false});

            assert.strictEqual(Obj.isNumber(result), true);

            assert.strictEqual(Num.isZero(result), true);
        });

        it("Should find the first string in an object.", function()
        {
            let col = {"a": 1, "b": "test", "c": "titi"};

            let result = Collection.find(col, function(v){ return Obj.isString(v) ? true : false});

            assert.strictEqual(Obj.isString(result), true);

            assert.strictEqual(Obj.isEqual(result, "test"), true);
        });

        it("Should find the first number in an object.", function()
        {
            let col = {"a": 1, "b": "test", "c": "titi"};

            let result = Collection.find(col, function(v){ return Obj.isNumber(v) ? true : false});

            assert.strictEqual(Obj.isNumber(result), true);

            assert.strictEqual(Num.isOne(result), true);
        });
    });

    describe("findKey", function()
    {
        it("Should find the third value of an array.", function()
        {
            let col = [1,2,3,4];

            let result = Collection.findKey(col, function (v) { return v == 2 ? true : false; });

            assert.strictEqual(Obj.isNumber(result), true);

            assert.strictEqual(Obj.isEqual(result, 3), true);
        });

        it("Should find the value of an object with specific index.", function()
        {
            let col = {0: 99, 1: 100, 2: 'str'};

            let result = Collection.findKey(col, function (v) { return v == 2 ? true : false; });

            assert.strictEqual(Obj.isString(result), true);

            assert.strictEqual(Obj.isEqual(result, "str"), true);
        });
    });

    describe("findIndex", function()
    {
        it("Should find the third value of an array.", function()
        {
            let col = [1,2,3,4];

            let result = Collection.findKey(col, function (v) { return v == 2 ? true : false; });

            assert.strictEqual(Obj.isNumber(result), true);

            assert.strictEqual(Obj.isEqual(result, 3), true);
        });

        it("Should find the value of an object with specific index.", function()
        {
            let col = {0: 99, 1: 100, 2: 'str'};

            let result = Collection.findKey(col, function (v) { return v == 2 ? true : false; });

            assert.strictEqual(Obj.isString(result), true);

            assert.strictEqual(Obj.isEqual(result, "str"), true);
        });
    });

    describe("flatten", function()
    {
        it("Should flatten a specified array.", function()
        {
            let col = [1, [2]];
            col = Collection.flatten(col);

            assert.strictEqual(Obj.isArray(col), true);

            assert.strictEqual(Obj.isEqual(col, [1,2]), true);
        });

        it("Should flatten a specified object.", function()
        {
            let col = {0:1, 1: {1:2}};
            col = Collection.flatten(col);

            assert.strictEqual(Obj.isArray(col), true);

            assert.strictEqual(Obj.isEqual(col, [1,2]), true);
        });
    });

    describe("getByType", function()
    {
        it("Should return all numbers in an array.", function()
        {
            let col = [0,1,"titi", 2];
            let result = Collection.getByType(col, "number");

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, [0,1,2]), true);
        });

        it("Should return all numbers in an object.", function()
        {
            let col = {0:1,2:"titi"};
            let result = Collection.getByType(col, "number");

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, [1]), true);
        });
    });

    describe("groupBy", function()
    {
        it("Should group element by length.", function()
        {
            let col = ["Cat", "Dog", "Iguana"];

            let result = Collection.groupBy(col, function(s) { return s.length;});
            let expectedResult = { '3': [ 'Cat', 'Dog' ], '6': [ 'Iguana' ] };

            assert.strictEqual(Obj.isObject(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);

        });
    });

    describe("groupsOf", function()
    {
        it("Should be able to create group of two elements.", function()
        {
            let col = [0,1,2,3];
            let result = Collection.groupsOf(col, 2);
            let expectedResult = [[0,1], [2,3]];

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("has", function()
    {
        it("Should say a key is inside an array.", function()
        {
            let col = ["titi", "toto"];

            assert.strictEqual(Collection.has(col, 1), true);
        });

        it("Should say a key is not inside an array.", function()
        {
            let col = ["titi", "toto"];

            assert.strictEqual(Collection.has(col, 10), false);
        });

        it("Should say a key is inside an object.", function()
        {
            let col = {"titi" : "toto"};

            assert.strictEqual(Collection.has(col, "titi"), true);
        });

        it("Should say a key is not inside an object.", function()
        {
            let col = {"titi" : "toto"};

            assert.strictEqual(Collection.has(col, "tata"), false);
        });
    });

    describe("keyExists", function()
    {
        it("Should say a key is inside an array.", function()
        {
            let col = ["titi", "toto"];

            assert.strictEqual(Collection.has(col, 1), true);
        });

        it("Should say a key is not inside an array.", function()
        {
            let col = ["titi", "toto"];

            assert.strictEqual(Collection.has(col, 10), false);
        });

        it("Should say a key is inside an object.", function()
        {
            let col = {"titi" : "toto"};

            assert.strictEqual(Collection.has(col, "titi"), true);
        });

        it("Should say a key is not inside an object.", function()
        {
            let col = {"titi" : "toto"};

            assert.strictEqual(Collection.has(col, "tata"), false);
        });
    });

    describe("invert", function()
    {
        it("Should be able to invert an array.", function()
        {
            let col = [1,2,3,4,5];
            let result = Collection.invert(col);
            let expectedResult = { '1': '0', '2': '1', '3': '2', '4': '3', '5': '4' };

            assert.strictEqual(Obj.isObject(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });

        it("Should be able to invert an object.", function()
        {
            let col = {"titi": "toto"};
            let result = Collection.invert(col);
            let expectedResult = {"toto": "titi"};

            assert.strictEqual(Obj.isObject(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("invoke", function()
    {
        it("Should apply a function to a collection.", function()
        {
            let col = {0: "Tulip", 1: "Daisy"};
            let fn = function(v, a) { return v + a;};

            let result = Collection.invoke(col, fn, [' is a flower']);
            let expectedResult = ["Tulip is a flower", "Daisy is a flower"];

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("isEmpty", function()
    {
        it("Should be able to say [] is an empty array.", function()
        {
            let test = Collection.isEmpty([]);
            assert.strictEqual(test, true);
        });

        it("Should be able to say [1] is not an empty array.", function()
        {
            let test = Collection.isEmpty([1]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [1,2,3] is not an empty array.", function()
        {
            let test = Collection.isEmpty([1,2,3]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [0,0,0] is not an empty array.", function()
        {
            let test = Collection.isEmpty([0,0,0]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [\"\"] is not an empty array.", function()
        {
            let test = Collection.isEmpty([""]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [\"\",\"\",\"\"] is not an empty array.", function()
        {
            let test = Collection.isEmpty(["","",""]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [\"aa\",\"aa\",\"aa\"] is not an empty array.", function()
        {
            let test = Collection.isEmpty(["aa","aa","aa"]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [\"12\",\"12\",\"12\"] is not an empty array.", function()
        {
            let test = Collection.isEmpty(["12","12","12"]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [''] is not an empty array.", function()
        {
            let test = Collection.isEmpty(['']);
            assert.strictEqual(test, false);
        });

        it("Should be able to say ['','',''] is not an empty array.", function()
        {
            let test = Collection.isEmpty(['','','']);
            assert.strictEqual(test, false);
        });

        it("Should be able to say ['aa','aa','aa'] is not an empty array.", function()
        {
            let test = Collection.isEmpty(['aa','aa','aa']);
            assert.strictEqual(test, false);
        });

        it("Should be able to say ['12','12','12'] is not an empty array.", function()
        {
            let test = Collection.isEmpty(['12','12','12']);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [true] is not an empty array.", function()
        {
            let test = Collection.isEmpty([true]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [true,true,true] is not an empty array.", function()
        {
            let test = Collection.isEmpty([true,true,true]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say [false,false,false] is not an empty array.", function()
        {
            let test = Collection.isEmpty([false,false,false]);
            assert.strictEqual(test, false);
        });

        it("Should be able to say {} is an empty object.", function()
        {
            let test = Collection.isEmpty({});
            assert.strictEqual(test, true);
        });

        it("Should be able to say {'titi': 'toto'} is not an empty object.", function()
        {
            let test = Collection.isEmpty({'titi': 'toto'});
            assert.strictEqual(test, false);
        });
    });

    describe("isUnique", function()
    {
        it("Should know if a value is unique inside an array.", function()
        {
            let col = [0,1,2,3,4];
            let result = Collection.isUnique(col, 2);

            assert.strictEqual(result, true);
        });

        it("Should know if a value is unique inside an object.", function()
        {
            let col = {"titi": "toto", "tata": "toto"};

            let result = Collection.isUnique(col, "titi");

            assert.strictEqual(result, false);
        });
    });

    describe("keys", function()
    {
        it("Should give the keys of an array.", function()
        {
            let col = [1,2];
            let result = Collection.keys(col);
            let expectedResult = ["0", "1"];

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });

        it("Should give the keys of an object.", function()
        {
            let col = {"titi": "toto", "tata": "tutu"};
            let result = Collection.keys(col);
            let expectedResult = ["titi", "tata"];

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("least", function()
    {
        it("Should find the least represented value in an array.", function()
        {
            let col = [1,1,1,2,2,2,2,3,3,4,5,5,5,5];

            let result = Collection.least(col);

            assert.strictEqual(result, "4");
        });

        it("Should find the least represented value in an object.", function()
        {
            let col = {0: 'Zero', 1: 'Zero', 2: 'One', 3: 'Two', 4: 'Two'};

            let result = Collection.least(col);

            assert.strictEqual(result, "One");
        });
    });

    describe("len", function()
    {
        it("Should count the number of element inside an array.", function()
        {
            let col = [0,1,2];
            let result = Collection.len(col);

            assert.strictEqual(result, 3);
        });

        it("Should count the number of element inside an object.", function()
        {
            let col = {"titi": "toto"};
            let result = Collection.len(col);

            assert.strictEqual(result, 1);
        });
    });

    describe("map", function()
    {
        it("Should apply a function to an array.", function()
        {
            let col = ["Red", "Blue", "Green"];
            let fn = function(v) {return v + " is a primary."};
            let expectedResult = ['Red is a primary.', 'Blue is a primary.', 'Green is a primary.'];
            let result = Collection.map(col, fn);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });

        it("Should apply a function to an object.", function()
        {
            let col = {one: "Red", two: "Blue", three: "Green"};
            let fn = function(v) {return v + " is a primary."};
            let expectedResult = ['Red is a primary.', 'Blue is a primary.', 'Green is a primary.'];
            let result = Collection.map(col, fn);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("max", function()
    {
        it("Should find the maximum value inside an array.", function()
        {
            let col = [17,10,56,12,23];
            let result = Collection.max(col);

            assert.strictEqual(result, 56);
        });

        it("Should find the maximum value inside an object.", function()
        {
            let col = {one: 10, two: 17, three: 56, four: 23};
            let result = Collection.max(col);

            assert.strictEqual(result, 56);
        });
    });

    describe("min", function()
    {
        it("Should find the minimum value inside an array.", function()
        {
            let col = [17,10,56,12,23];
            let result = Collection.min(col);

            assert.strictEqual(result, 10);
        });

        it("Should find the minimum value inside an object.", function()
        {
            let col = {one: 19, two: 17, three: 56, four: 23};
            let result = Collection.min(col);

            assert.strictEqual(result, 17);
        });
    });

    describe("most", function()
    {
        it("Should find the most represented value in an array.", function()
        {
            let col = [1,1,1,2,2,2,2,3,3,4,5,5,5,5];

            let result = Collection.most(col);

            assert.strictEqual(result, "2");
        });

        it("Should find the most represented value in an object.", function()
        {
            let col = {0: 'Zero', 1: 'Zero', 2: 'One', 3: 'Two', 4: 'Two'};

            let result = Collection.most(col);

            assert.strictEqual(result, "Zero");
        });
    });

    describe("none", function()
    {
        it("Should apply function to a collection.", function()
        {
            let col = [0,1,2];
            let result = Collection.none(col, Obj.isString);

            assert.strictEqual(result, true);
        });
    });

    describe("omit", function()
    {
        it("Should omit some values of an array.", function()
        {
            let col = ["Red", "Green", "Blue"];
            let result = Collection.omit(col, [0]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Green", "Blue"]), true);
        });

        it("Should omit some values of an object.", function()
        {
            let col = {"Red" : 1, "Green": 2, "Blue": 3};
            let result = Collection.omit(col, ["Red"]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, [2,3]), true);
        });
    });

    describe("blacklist", function()
    {
        it("Should blacklist some values in an array.", function()
        {
            let col = ["Red", "Green", "Blue"];
            let result = Collection.omit(col, [0]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Green", "Blue"]), true);
        });

        it("Should blacklist some values of an object.", function()
        {
            let col = {"Red" : 1, "Green": 2, "Blue": 3};
            let result = Collection.omit(col, ["Red"]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, [2,3]), true);
        });
    });

    describe("only", function()
    {
        it("Should get only some values in an array.", function()
        {
            let col = ["Red", "Green", "Blue"];
            let result = Collection.only(col, [0]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Red"]), true);
        });

        it("Should get only some values of an object.", function()
        {
            let col = {"Red" : 1, "Green": 2, "Blue": 3};
            let result = Collection.only(col, ["Red"]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, [1]), true);
        });
    });

    describe("whitelist", function()
    {
        it("Should whitelist some values in an array.", function()
        {
            let col = ["Red", "Green", "Blue"];
            let result = Collection.only(col, [0]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Red"]), true);
        });

        it("Should whitelist some values of an object.", function()
        {
            let col = {"Red" : 1, "Green": 2, "Blue": 3};
            let result = Collection.only(col, ["Red"]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, [1]), true);
        });
    });

    describe("reject", function()
    {
        it("Should reject some values in an array.", function()
        {
            let col = ["Red", "Green", "Blue", 1];
            let result = Collection.reject(col, Obj.isString);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, [1]), true);
        });
    });

    describe("replace", function()
    {
        it("Should replace some values in an array.", function()
        {
            let col = ["Red", "Green", "Blue"];
            let result = Collection.replace(col, function(v) { return v + " is a color."});

            let expectedResult = ["Red is a color.", "Green is a color.", "Blue is a color."];

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("set", function()
    {
        it("Should add a value to a collection.", function()
        {
            let col = [];
            col = Collection.set(col, 0, "test");

            assert.strictEqual(Obj.isArray(col), true);

            assert.strictEqual(Obj.isEqual(col, ["test"]), true);
        });

        it("Should set a value to a collection.", function()
        {
            let col = [1];
            col = Collection.set(col, 0, "test");

            assert.strictEqual(Obj.isArray(col), true);

            assert.strictEqual(Obj.isEqual(col, ["test"]), true);
        });
    });

    describe("setUndefined", function()
    {
        it("Should set all undefined value of a collection.", function()
        {
            let col = [1, 2, undefined, 3];
            col = Collection.setUndefined(col, "test");

            assert.strictEqual(Obj.isArray(col), true);

            assert.strictEqual(Obj.isEqual(col, [1,2,"test",3]), true);
        });
    });

    describe("size", function()
    {
        it("Should count all non falsy values of a collection.", function()
        {
            let col = [1, null, 2, 3, ""];

            assert.strictEqual(Collection.size(col), 3);
        });
    });

    describe("sortBy", function()
    {
        it("Should sort all values in an array.", function()
        {
            let col = [1,2,3,4,5,6];
            let result = Collection.sortBy(col, function(n)
            {
                return Math.cos(n);
            });

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, [3,4,2,5,1,6]), true);
        });
    });

    describe("sum", function()
    {
        it("Should sum all numbers inside a collection.", function()
        {
            let col = [1,2,3,4, "test"];

            assert.strictEqual(Collection.sum(col), 10);
        });
    });

    describe("where", function()
    {
        it("Should match an object.", function()
        {
            let col = [{id: 0, age: 22}, {id: 1, age: 29}, {id: 2, age: 29}];
            let expectedResult = [{id: 1, age: 29}, {id: 2, age: 29}];
            let result = Collection.where(col, {age: 29});

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("whereFirst", function()
    {
        it("Should match an object.", function()
        {
            let col = [{id: 0, age: 22}, {id: 1, age: 29}, {id: 2, age: 29}];
            let expectedResult = {id: 1, age: 29};
            let result = Collection.whereFirst(col, {age: 29});

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("values", function()
    {
        it("Should return the values of an object.", function()
        {
            let col = {one: "test", two: "titi"};
            let result = Collection.values(col);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["test", "titi"]), true);
        });
    });
});
