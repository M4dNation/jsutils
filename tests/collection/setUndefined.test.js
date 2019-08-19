require("should");

const setUndefined = require("../../lib/collection/setUndefined.js");

describe("setUndefined", function()
{
    it("Should set all undefined value of a collection.", function()
    {
        let col = [1, 2, undefined, 3];
        col = setUndefined(col, "test");

        col.should.eql([1, 2, "test", 3])
    });
});