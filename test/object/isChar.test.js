require("should");

const isChar = require("../../lib/object/isChar.js");

describe("isChar", function () 
{
    it("Should be able to say a string with single character is a char", function()
    {
        isChar("c").should.be.exactly(true);
    });

    it("Should be able to say empty string is not a char", function () 
    {
        isChar("").should.be.exactly(false);
    });

    it("Should be able to say tata is not a char", function () 
    {
        isChar("tata").should.be.exactly(false);
    });

    it("Should be able to say a date object is not a char", function () 
    {
        isChar(new Date()).should.be.exactly(false);
    });

    it("Should be able to say false is not a char", function () 
    {
        isChar(false).should.be.exactly(false);
    });

    it("Should be able to say true is not a char", function () 
    {
        isChar(true).should.be.exactly(false);
    });

    it("Should be able to say an array is not a char", function () 
    {
        isChar([]).should.be.exactly(false);
    });

    it("Should be able to say null is not a char", function () 
    {
        isChar(null).should.be.exactly(false);
    });

    it("Should be able to say undefined is not a char", function () 
    {
        isChar(undefined).should.be.exactly(false);
    });

    it("Should be able to say NaN is not a char", function () 
    {
        isChar(NaN).should.be.exactly(false);
    });

    it("Should be able to say 110 is not a char", function () 
    {
        isChar(110).should.be.exactly(false);
    });

    it("Should be able to say -13 is not a char", function () 
    {
        isChar(-13).should.be.exactly(false);
    });

    it("Should be able to say object is not a char", function () 
    {
        isChar({}).should.be.exactly(false);
    });
});