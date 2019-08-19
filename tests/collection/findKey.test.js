require("should");

const findKey = require("../../lib/collection/findKey.js");

describe("findKey", function () 
{
    it("Should find the third value of an array", function () 
    {
        let col = [1, 2, 3, 4];

        let result = findKey(col, function (v) { return v == 2 ? true : false; });

        result.should.be.exactly(3);
    });

    it("Should find the value of an object with specific index", function () 
    {
        let col = { 0: 99, 1: 100, 2: "str" };

        let result = findKey(col, function (v) { return v == 2 ? true : false; });

        result.should.be.exactly("str");
    });
});