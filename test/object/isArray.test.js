require("should");

const isArray = require("../../lib/object/isArray.js");

describe("isArray", function () 
{
    it("Should be able to say an array is array.", function () 
    {
        isArray([]).should.be.exactly(true);
    });

    it("Should be able to say empty string is not an array.", function () 
    {
        isArray("").should.be.exactly(false);
    });

    it("Should be able to say null is not an array.", function () 
    {
        isArray(null).should.be.exactly(false);
    });

    it("Should be able to say undefined is not an array.", function () 
    {
        isArray(undefined).should.be.exactly(false);
    });

    it("Should be able to say NaN is not an array.", function () 
    {
        isArray(NaN).should.be.exactly(false);
    });

    it("Should be able to say false is not an array.", function () 
    {
        isArray(false).should.be.exactly(false);
    });

    it("Should be able to say true is not an array.", function () 
    {
        isArray(true).should.be.exactly(false);
    });

    it("Should be able to say 110 is not an array.", function () 
    {
        isArray(110).should.be.exactly(false);
    });

    it("Should be able to say -13 is not an array.", function () 
    {
        isArray(-13).should.be.exactly(false);
    });

    it("Should be able to say tata is not an array.", function () 
    {
        isArray("tata").should.be.exactly(false);
    });

    it("Should be able to say object is not an array.", function () 
    {
        isArray({}).should.be.exactly(false);
    });
});