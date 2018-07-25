require("should");

const each = require("../../lib/collection/each.js");

describe("each", function()
{
    it("Should double numbers in an array.", function()
    {
        let col = [0, 1, 2];

        each(col, function(value, index)
        {
            col[index] = value * 2;
        });

        col.should.eql([0, 2, 4]);
    });

    it("Should double numbers in an object.", function()
    {
        let col = {"a": 0, "b": 1, "c": 2};

        each(col, function(value, index)
        {
            col[index] = value * 2;
        });

        col.should.eql({"a": 0, "b": 2, "c": 4});
    });
});