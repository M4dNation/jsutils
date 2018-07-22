require("should");

const lastIndexOf = require("../../lib/array/lastIndexOf.js");

describe("lastIndexOf", function()
{
    it("Should find an element.", function()
    {
        let arr = [1,2,3,2];

        let result = lastIndexOf(arr, 2);

        result.should.be.exactly(3);
    });

    it("Should not find an element.", function()
    {
        let arr = [1,2,3];

        let result = lastIndexOf(arr, 20);

        result.should.be.exactly(-1);
    });
});
