require("should");

const isPort = require("../../lib/utility/isPort.js");

describe("isPort", function()
{
    it("Should find out if the provided value is a port.", function()
    {
        isPort("titi").should.be.exactly(false);
        isPort("52").should.be.exactly(true);
        isPort(12).should.be.exactly(true);
        isPort(-12).should.be.exactly(false);
        isPort(90000).should.be.exactly(false);
        isPort(80).should.be.exactly(true);
    });
});