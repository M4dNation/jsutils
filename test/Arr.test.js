var assert = require("assert");
const Arr = require("../lib/jstoolbox.js").Arr;
const Obj = require("../lib/jstoolbox.js").Obj;

describe("Array Methods", function()
{
    describe("at", function()
    {
        it("Should get wanted elements.", function()
        {
            let arr = ["Earth", "Mars", "Jupiter"];

            let result = Arr.at(arr, 1);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Mars"]), true);
        });
    });

    describe("difference", function()
    {
        it("Should get wanted elements.", function()
        {
            let arr = ["Earth", "Mars", "Jupiter"];

            let result = Arr.difference(arr, ["Earth", "Jupiter"]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Mars"]), true);
        });
    });

    describe("take", function()
    {
        it("Should get the first element.", function()
        {
            let arr = ["Earth", "Mars", "Jupiter"];

            let result = Arr.take(arr);

            assert.strictEqual(Obj.isEqual(result, "Earth"), true);
        });

        it("Should get the two first elements", function()
        {
            let arr = ["Earth", "Mars", "Jupiter"];

            let result = Arr.take(arr, 2);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Earth", "Mars"]), true);
        });
    });

    describe("indexOf", function()
    {
        it("Should find an element.", function()
        {
            let arr = [1,2,3];

            let result = Arr.indexOf(arr, 2);

            assert.strictEqual(result, 1);
        });

        it("Should not find an element.", function()
        {
            let arr = [1,2,3];

            let result = Arr.indexOf(arr, 20);

            assert.strictEqual(result, -1);
        });
    });

    describe("initial", function()
    {
        it("Should get the all but the last element.", function()
        {
            let arr = ["Earth", "Mars", "Jupiter"];

            let result = Arr.initial(arr);

            assert.strictEqual(Obj.isEqual(result, ["Earth", "Mars"]), true);
        });

        it("Should get all but the two last elements", function()
        {
            let arr = ["Earth", "Mars", "Jupiter"];

            let result = Arr.initial(arr, 2);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Earth"]), true);
        });
    });

    describe("intersection", function()
    {
        it("Should get wanted elements.", function()
        {
            let arr = ["Earth", "Mars", "Jupiter"];

            let result = Arr.intersection(arr, ["Earth", "Jupiter"]);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Earth", "Jupiter"]), true);
        });
    });

    describe("last", function()
    {
        it("Should get the last element.", function()
        {
            let arr = ["Earth", "Mars", "Jupiter"];

            let result = Arr.last(arr);

            assert.strictEqual(Obj.isEqual(result, "Jupiter"), true);
        });

        it("Should get the two first elements", function()
        {
            let arr = ["Earth", "Mars", "Jupiter"];

            let result = Arr.last(arr, 2);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, ["Mars", "Jupiter"]), true);
        });
    });

    describe("lastIndexOf", function()
    {
        it("Should find an element.", function()
        {
            let arr = [1,2,3,2];

            let result = Arr.lastIndexOf(arr, 2);

            assert.strictEqual(result, 3);
        });

        it("Should not find an element.", function()
        {
            let arr = [1,2,3];

            let result = Arr.lastIndexOf(arr, 20);

            assert.strictEqual(result, -1);
        });
    });

    describe("toObject", function()
    {
        it("Should transform an array into an object.", function()
        {
            let array = [0, "Blue"];

            let result = Arr.toObject(array);
            let expectedResult = {0: "Blue"};

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });

        it("Should transform two arrays into an object.", function()
        {
            let firstArray = [0,1,2];
            let secondArray = ["Blue", "Red", "Green"];
            let expectedResult = {0: "Blue", 1: "Red", 2: "Green"};

            let result = Arr.toObject(firstArray, secondArray);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("remove", function()
    {
        it("Should remove a value from an array.", function()
        {
            let arr = [1,2,2,4];
            let expectedResult = [1,4];

            let result = Arr.remove(arr, 2);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("tail", function()
    {
        it("Should get all elements but the first.", function()
        {
            let arr = ["Magnolia", "Rose", "Lilly"];
            let expectedResult = ["Rose", "Lilly"];

            let result = Arr.tail(arr);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });

        it("Should get all elements but the two first one.", function()
        {
            let arr = ["Magnolia", "Rose", "Lilly"];
            let expectedResult = ["Lilly"];

            let result = Arr.tail(arr, 2);

            assert.strictEqual(Obj.isArray(result), true);

            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("union", function()
    {
        it("Should union two arrays in one.", function()
        {
            let firstArr = ["Red", "Green"];
            let secondArr = ["Blue", "Red"];

            let result = Arr.union(firstArr, secondArr);
            let expectedResult = ["Red", "Green", "Blue"];

            assert.strictEqual(Obj.isArray(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("unique", function()
    {
        it("Should get only the unique elements.", function()
        {
            let arr = ["Red", "Green", "Red", "Yellow"];

            let result = Arr.unique(arr);
            let expectedResult = ["Red", "Green", "Yellow"];

            assert.strictEqual(Obj.isArray(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("without", function()
    {
        it("Should get the wanted elements.", function()
        {
            let arr = ["Red", "Green", "Yellow"];

            let result = Arr.without(arr, ["Red"]);
            let expectedResult = ["Green", "Yellow"];

            assert.strictEqual(Obj.isArray(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("zip", function()
    {
        it("Should merge elements into a single array.", function()
        {
            let arr = ["Red", "Blue"];
            let secondArr = ["#F00", "#00F"];

            let result = Arr.zip(arr, secondArr);
            let expectedResult = [['Red', '#F00'], ['Blue', '#00F']];

            assert.strictEqual(Obj.isArray(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });
});
