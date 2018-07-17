require("should");

const defaults = require("../../lib/object/defaults.js");

describe("defaults", function () 
{
    it("Should set default value to an object.", function () 
    {
        let obj = { 0: "test", 1: "titi" };

        let def = { 0: "toto", 2: "tata" };

        let result = defaults(obj, def);
        let expectedResult = { 0: "test", 1: "titi", 2: "tata" };

        result.should.eql(expectedResult);
    });
});