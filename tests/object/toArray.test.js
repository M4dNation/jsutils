require("should");

const toArray = require("../../lib/object/toArray.js");

describe("toArray", function () 
{
    it("Should transform a simple object into an array.", function () 
    {
        let obj = { 0: "test" };

        toArray(obj).should.eql(["test"]);
    });
});