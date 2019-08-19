require("should");

const deep = require("../../lib/collection/deep.js");

describe("deep", function()
{
    it("Should double numbers in an array.", function()
    {
        let col = [0, 1, 2];

        deep(col, function (depth, index, elm) 
        {
            col[index] = elm * 2;
        }, 1);

        col.should.eql([0, 2, 4]);
    });

    it("Should double numbers in an object.", function()
    {
        let col = {"a": 0, "b": 1, "c": 2};

        deep(col, function (depth, index, elm) 
        {
            col[index] = elm * 2;
        }, 1);

        col.should.eql({"a": 0, "b": 2, "c": 4});
    });

    it("Should find numbers in a nested array.", function()
    {
        let col = [0, 1, [2, 4, 8]];

        let result = deep(col, function (depth, index, elm) 
        {
            if (Number.isInteger(elm))
                return true;

            return false;
        }, "*");

        result.should.eql([0, 1, 2, 4, 8]);
    });

    it("Should double numbers in a nested object.", function()
    {
        let col = {"a": 0, "b": 1, "c": {"d": 2, "e": 4, "f": 8}};

        let result = deep(col, function (depth, index, elm) 
        {
            if (Number.isInteger(elm))
                return true;

            return false;
        }, "*");

        result.should.eql([0, 1, 2, 4, 8]);
    });
});