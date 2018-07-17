require("should");

const isTrue = require("../../lib/object/isTrue.js");

describe("isTrue", function()
{
    it("Should be able to say true is true.", function()
    {
        let result = isTrue(true);
        result.should.be.exactly(true);
    });

    it("Should be able to say false is not true.", function()
    {
        let result = isTrue(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say zero is not true.", function()
    {
        let result = isTrue(0);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not true.", function()
    {
        let result = isTrue("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not true.", function()
    {
        let result = isTrue(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not true.", function()
    {
        let result = isTrue(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not true.", function()
    {
        let result = isTrue(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not true.", function()
    {
        let result = isTrue(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not true.", function()
    {
        let result = isTrue(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not true.", function()
    {
        let result = isTrue("tata");
        result.should.be.exactly(false);
    });
});