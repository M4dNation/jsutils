require("should");

const isString = require("../../lib/object/isString.js");

describe("isString", function () 
{
    it("Should be able to say empty string is a string", function () 
    {
        isString("").should.be.exactly(true);
    });

    it("Should be able to say tata is a string", function () 
    {
        isString("tata").should.be.exactly(true);
    });

    it("Should be able to say a date object is not a string", function () 
    {
        isString(new Date()).should.be.exactly(false);
    });

    it("Should be able to say false is not a string", function () 
    {
        isString(false).should.be.exactly(false);
    });

    it("Should be able to say true is not a string", function () 
    {
        isString(true).should.be.exactly(false);
    });

    it("Should be able to say an array is not a string", function () 
    {
        isString([]).should.be.exactly(false);
    });

    it("Should be able to say null is not a string", function () 
    {
        isString(null).should.be.exactly(false);
    });

    it("Should be able to say undefined is not a string", function () 
    {
        isString(undefined).should.be.exactly(false);
    });

    it("Should be able to say NaN is not a string", function () 
    {
        isString(NaN).should.be.exactly(false);
    });

    it("Should be able to say 110 is not a string", function () 
    {
        isString(110).should.be.exactly(false);
    });

    it("Should be able to say -13 is not a string", function () 
    {
        isString(-13).should.be.exactly(false);
    });

    it("Should be able to say object is not a string", function () 
    {
        isString({}).should.be.exactly(false);
    });
});