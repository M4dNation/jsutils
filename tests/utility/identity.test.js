require("should");

const identity = require("../../lib//utility/identity.js");

describe("identity", function()
{
    it("Should return the exact same variable.", function()
    {
        let result = identity(1);

        result.should.be.exactly(1);
    });

    it("Should return the exact same function.", function()
    {
        let result = identity(function(){return "titi"});

        let val = result();

        val.should.be.exactly("titi");
    });
});