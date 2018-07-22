require("should");

const sortBy = require("../../lib/collection/sortBy.js");

describe("sortBy", function()
{
    it("Should sort all values in an array.", function()
    {
        let col = [1,2,3,4,5,6];
        let result = sortBy(col, function(n)
        {
            return Math.cos(n);
        });

        result.should.eql([3,4,2,5,1,6]);
    });
});