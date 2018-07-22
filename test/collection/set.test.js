require("should");

const set = require("../../lib/collection/set.js");

describe("set", function()
{
    it("Should add a value to a collection.", function()
    {
        let col = [];
        col = set(col, 0, "test");

        col.should.eql(["test"]);
    });

    it("Should set a value to a collection.", function()
    {
        let col = [1];
        col = set(col, 0, "test");

        col.should.eql(["test"]);
    });
});