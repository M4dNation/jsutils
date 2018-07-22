require("should");

const unique = require("../../lib/array/unique.js");

describe("unique", function()
{
    it("Should get only the unique elements.", function()
    {
        let arr = ["Red", "Green", "Red", "Yellow"];

        let result = unique(arr);
        let expectedResult = ["Red", "Green", "Yellow"];

        result.should.eql(expectedResult);
    });
});