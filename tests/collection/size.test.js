require("should");

const size = require("../../lib/collection/size.js");

describe("size", function()
{
    it("Should count all non falsy values of a collection.", function()
    {
        let col = [1, null, 2, 3, ""];

        size(col).should.be.exactly(3);
    });
});