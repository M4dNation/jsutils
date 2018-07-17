require("should");

const isTruthy = require("../../lib/object/isTruthy.js");

describe("isTruthy", function()
{
    it("Should be able to say zero is not truthy.", function()
    {
        let result = isTruthy(0);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not truthy.", function()
    {
        let result = isTruthy("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not truthy.", function()
    {
        let result = isTruthy(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not truthy.", function()
    {
        let result = isTruthy(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not truthy.", function()
    {
        let result = isTruthy(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say false is not truthy.", function()
    {
        let result = isTruthy(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is truthy.", function()
    {
        let result = isTruthy(true);
        result.should.be.exactly(true);
    });

    it("Should be able to say 110 is truthy.", function()
    {
        let result = isTruthy(110);
        result.should.be.exactly(true);
    });

    it("Should be able to say -13 is truthy.", function()
    {
        let result = isTruthy(-13);
        result.should.be.exactly(true);
    });

    it("Should be able to say tata is truthy.", function()
    {
        let result = isTruthy("tata");
        result.should.be.exactly(true);
    });
});