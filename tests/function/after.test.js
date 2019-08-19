require("should");

const after = require("../../lib/function/after.js");

describe("after", function() 
{
    it("Should return a value after 3 calls.", function () 
    {
        let fn = function (v) { return v; };
        let returnVal = undefined;
        fn = after(fn, 3);

        returnVal = fn(5);
        returnVal = fn(5);
        returnVal = fn(5);

        returnVal.should.be.exactly(5);
    });
});