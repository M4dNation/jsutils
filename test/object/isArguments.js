require("should");

const isArguments = require("../../lib/object/isArguments.js");

describe("isArguments", function()
{
    it("Should be able to say arguments is arguments.", function()
    {
        let result = isArguments(arguments);
        result.should.be.exactly(true);
    });
    it("Should be able to say zero is not arguments.", function()
    {
        let result = isArguments(0);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not arguments.", function()
    {
        let result = isArguments("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not arguments.", function()
    {
        let result = isArguments(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not arguments.", function()
    {
        let result = isArguments(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not arguments.", function()
    {
        let result = isArguments(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say false is not arguments.", function()
    {
        let result = isArguments(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not arguments.", function()
    {
        let result = isArguments(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not arguments.", function()
    {
        let result = isArguments(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not arguments.", function()
    {
        let result = isArguments(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not arguments.", function()
    {
        let result = isArguments("tata");
        result.should.be.exactly(false);
    });

    it("Should be able to say object is not arguments.", function()
    {
        let result = isArguments({});
        result.should.be.exactly(false);
    });
});