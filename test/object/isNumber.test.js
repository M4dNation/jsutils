require("should");

const isNumber = require("../../lib/object/isNumber.js");

describe("isNumber", function () 
{
    it("Should be able to say 110 is a number.", function () 
    {
        isNumber(110).should.be.exactly(true);
    });

    it("Should be able to say -13 is a number.", function () 
    {
        isNumber(-13).should.be.exactly(true);
    });

    it("Should be able to say NaN is a number.", function () 
    {
        isNumber(NaN).should.be.exactly(true);
    });

    it("Should be able to say a date object is not a number.", function () {
        isNumber(new Date()).should.be.exactly(false);
    });

    it("Should be able to say false is not a number.", function () {
        isNumber(false).should.be.exactly(false);
    });

    it("Should be able to say true is not a number.", function () {
        isNumber(true).should.be.exactly(false);
    });

    it("Should be able to say an array is not a number.", function () {
        isNumber([]).should.be.exactly(false);
    });

    it("Should be able to say empty string is not a number.", function () {
        isNumber("").should.be.exactly(false);
    });

    it("Should be able to say null is not a number.", function () {
        isNumber(null).should.be.exactly(false);
    });

    it("Should be able to say undefined is not a number.", function () {
        isNumber(undefined).should.be.exactly(false);
    });

    it("Should be able to say tata is not a number.", function () {
        isNumber("tata").should.be.exactly(false);
    });

    it("Should be able to say object is not a number.", function () {
        isNumber({}).should.be.exactly(false);
    });
});