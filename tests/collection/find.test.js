require("should");

const find = require("../../lib/collection/find.js");
const isString = require("../../lib/object/isString.js");
const isNumber = require("../../lib/object/isNumber.js");

describe("find", function () 
{
    it("Should find the first string in an array", function () 
    {
        let col = [0, 1, "test", "titi"];

        let result = find(col, function (v) { return isString(v) ? true : false });

        result.should.be.exactly("test");
    });

    it("Should find the first number in an array", function () {
        let col = [0, 1, "test", "titi"];

        let result = find(col, function (v) { return isNumber(v) ? true : false });

        result.should.be.exactly(0);
    });

    it("Should find the first string in an object", function () {
        let col = { "a": 1, "b": "test", "c": "titi" };

        let result = find(col, function (v) { return isString(v) ? true : false });

        result.should.be.exactly("test");
    });

    it("Should find the first number in an object", function () {
        let col = { "a": 1, "b": "test", "c": "titi" };

        let result = find(col, function (v) { return isNumber(v) ? true : false });

        result.should.be.exactly(1);
    });
}); 