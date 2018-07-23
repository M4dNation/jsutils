require("should");

const isOne = require("../../lib/number/isOne.js");

describe("isOne", function()
{
    it("Should be able to say 1 is one.", function()
    {
        isOne(1).should.be.exactly(true);
    });

    it("Should be able to say 0 is not one.", function()
    {
        isOne(0).should.be.exactly(false);
    });

    it("Should be able to say -1 is not one.", function()
    {
        isOne(-1).should.be.exactly(false);
    });

    it("Should be able to say false is not one.", function()
    {
        isOne(false).should.be.exactly(false);
    });

    it("Should be able to say true is not one.", function()
    {
        isOne(true).should.be.exactly(false);
    });

    it("Should be able to say titi is not one.", function()
    {
        isOne("titi").should.be.exactly(false);
    });
});