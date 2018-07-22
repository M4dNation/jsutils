require("should");

const without = require("../../lib/array/without.js");

describe("without", function()
{
    it("Should get the wanted elements.", function()
    {
        let arr = ["Red", "Green", "Yellow"];

        let result = without(arr, ["Red"]);
        let expectedResult = ["Green", "Yellow"];

        result.should.eql(expectedResult);
    });
});