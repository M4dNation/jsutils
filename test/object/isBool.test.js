require("should");

const isBool = require("../../lib/object/isBool.js");

describe("isBool", function () 
{
    it("Should be able to say false is a boolean.", function () 
    {
        isBool(false).should.be.exactly(true);
    });

    it("Should be able to say true is a boolean.", function () 
    {
        isBool(true).should.be.exactly(true);
    });

    it("Should be able to say an array is not a boolean.", function () 
    {
        isBool([]).should.be.exactly(false);
    });

    it("Should be able to say empty string is not a boolean.", function () 
    {
        isBool("").should.be.exactly(false);
    });

    it("Should be able to say null is not a boolean.", function () 
    {
        isBool(null).should.be.exactly(false);
    });

    it("Should be able to say undefined is not a boolean.", function () 
    {
        isBool(undefined).should.be.exactly(false);
    });

    it("Should be able to say NaN is not a boolean.", function () 
    {
        isBool(NaN).should.be.exactly(false);
    });

    it("Should be able to say 110 is not a boolean.", function () 
    {
        isBool(110).should.be.exactly(false);
    });

    it("Should be able to say -13 is not a boolean.", function () 
    {
        isBool(-13).should.be.exactly(false);
    });

    it("Should be able to say tata is not a boolean.", function () 
    {
        isBool("tata").should.be.exactly(false);
    });

    it("Should be able to say object is not a boolean.", function () 
    {
        isBool({}).should.be.exactly(false);
    });
});