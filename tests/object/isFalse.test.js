require("should");

const isFalse = require("../../lib/object/isFalse.js");

describe("isFalse", function()
{
    it("Should be able to say false is false.", function()
    {
        let result = isFalse(false);
        result.should.be.exactly(true);
    });

    it("Should be able to say true is not false.", function()
    {
        let result = isFalse(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say zero is not false.", function()
    {
        let result = isFalse(0);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not false.", function()
    {
        let result = isFalse("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not false.", function()
    {
        let result = isFalse(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not false.", function()
    {
        let result = isFalse(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not false.", function()
    {
        let result = isFalse(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not false.", function()
    {
        let result = isFalse(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not false.", function()
    {
        let result = isFalse(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not false.", function()
    {
        let result = isFalse("tata");
        result.should.be.exactly(false);
    });
});