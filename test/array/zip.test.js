require("should");

const zip = require("../../lib/array/zip.js");

describe("zip", function()
{
    it("Should merge elements into a single array.", function()
    {
        let arr = ["Red", "Blue"];
        let secondArr = ["#F00", "#00F"];

        let result = zip(arr, secondArr);
        let expectedResult = [["Red", "#F00"], ["Blue", "#00F"]];

        result.should.eql(expectedResult);
    });
});