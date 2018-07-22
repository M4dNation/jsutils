require("should");

const indexOf = require("../../lib/array/indexOf.js");

describe("indexOf", function()
{
    it("Should find an element.", function()
    {
        let arr = [1,2,3];

        let result = indexOf(arr, 2);

        result.should.be.exactly(1);
    });

    it("Should not find an element.", function()
    {
        let arr = [1,2,3];

        let result = indexOf(arr, 20);

        result.should.be.exactly(-1);
    });
});