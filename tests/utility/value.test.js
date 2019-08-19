require("should");

const value = require("../../lib/utility/value.js");

describe("value", function()
{
    it("Should return a variable value.", function()
    {
        let result = value(0);

        result.should.be.exactly(0);
    });

    it("Should execute a function and return its return value.", function()
    {
        let result = value(function(){return "test";});

        result.should.be.exactly("test");
    });
});