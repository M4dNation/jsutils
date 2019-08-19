require("should");

const isError = require("../../lib/object/isError.js");

describe("isError", function () 
{
    it("Should be able to say an error is error", function () 
    {
        isError(new Error("error")).should.be.exactly(true);
    });

    it("Should be able to say empty string is not an error", function () 
    {
        isError("").should.be.exactly(false);
    });

    it("Should be able to say null is not an error", function () 
    {
        isError(null).should.be.exactly(false);
    });

    it("Should be able to say undefined is not an error", function () 
    {
        isError(undefined).should.be.exactly(false);
    });

    it("Should be able to say NaN is not an error", function () 
    {
        isError(NaN).should.be.exactly(false);
    });

    it("Should be able to say false is not an error", function () 
    {
        isError(false).should.be.exactly(false);
    });

    it("Should be able to say true is not an error", function () 
    {
        isError(true).should.be.exactly(false);
    });

    it("Should be able to say 110 is not an error", function () 
    {
        isError(110).should.be.exactly(false);
    });

    it("Should be able to say -13 is not an error", function () 
    {
        isError(-13).should.be.exactly(false);
    });

    it("Should be able to say tata is not an error", function () 
    {
        isError("tata").should.be.exactly(false);
    });

    it("Should be able to say object is not an error", function () 
    {
        isError({}).should.be.exactly(false);
    });
});