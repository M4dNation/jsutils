require("should");

const union = require("../../lib/array/union.js");

describe("union", function()
{
    it("Should union two arrays in one.", function()
    {
        let firstArr = ["Red", "Green"];
        let secondArr = ["Blue", "Red"];

        let result = union(firstArr, secondArr);
        let expectedResult = ["Red", "Green", "Blue"];

        result.should.eql(expectedResult);
    });
});