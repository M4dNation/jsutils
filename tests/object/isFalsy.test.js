require("should");

const isFalsy = require("../../lib/object/isFalsy.js");

describe("isFalsy", function()
{
    it("Should be able to say zero is falsy.", function()
    {
        let result = isFalsy(0);
        result.should.be.exactly(true);
    });

    it("Should be able to say empty string is falsy.", function()
    {
        let result = isFalsy("");
        result.should.be.exactly(true);
    });

    it("Should be able to say null is falsy.", function()
    {
        let result = isFalsy(null);
        result.should.be.exactly(true);
    });

    it("Should be able to say undefined is falsy.", function()
    {
        let result = isFalsy(undefined);
        result.should.be.exactly(true);
    });

    it("Should be able to say NaN is falsy.", function()
    {
        let result = isFalsy(NaN);
        result.should.be.exactly(true);
    });

    it("Should be able to say false is falsy.", function()
    {
        let result = isFalsy(false);
        result.should.be.exactly(true);
    });

    it("Should be able to say true is not falsy.", function()
    {
        let result = isFalsy(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not falsy.", function()
    {
        let result = isFalsy(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not falsy.", function()
    {
        let result = isFalsy(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not falsy.", function()
    {
        let result = isFalsy("tata");
        result.should.be.exactly(false);
    });
});