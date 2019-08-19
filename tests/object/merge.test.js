require("should");

const merge = require("../../lib/object/merge.js");

describe("merge", function () 
{
    it("Should merge two objects in one.", function () 
    {
        let obj1 = { 0: "test" };
        let obj2 = { 1: "titi" };

        let result = merge(obj1, obj2);

        let expectedResult = { 0: "test", 1: "titi" };

        result.should.eql(expectedResult);
    });
});