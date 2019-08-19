require("should");

const pairs = require("../../lib/object/pairs.js");

describe("pairs", function()
{
    it("Should get property name and value as pairs.", function()
    {
        let obj = {"test": "titi"};
        let result = pairs(obj);
        let expectedResult = [["test", "titi"]];

        result.should.eql(expectedResult);
    });
});