require("should");

const isPlainObject = require("../../lib/object/isPlainObject.js");

describe("isPlainObject", function () 
{
    it("Should be able to say object is a plain object.", function () 
    {
        isPlainObject({}).should.be.exactly(true);
    });

    it("Should be able to say a date object is not a plain object.", function () 
    {
        isPlainObject(new Date()).should.be.exactly(false);
    });

    it("Should be able to say false is not a plain object.", function () 
    {
        isPlainObject(false).should.be.exactly(false);
    });

    it("Should be able to say true is not a plain object.", function () 
    {
        isPlainObject(true).should.be.exactly(false);
    });

    it("Should be able to say an array is not a plain object.", function () 
    {
        isPlainObject([]).should.be.exactly(false);
    });

    it("Should be able to say empty string is not a plain object.", function () 
    {
        isPlainObject("").should.be.exactly(false);
    });

    it("Should be able to say null is not a plain object.", function () 
    {
        isPlainObject(null).should.be.exactly(false);
    });

    it("Should be able to say undefined is not a plain object.", function () 
    {
        isPlainObject(undefined).should.be.exactly(false);
    });

    it("Should be able to say NaN is not a plain object.", function () 
    {
        isPlainObject(NaN).should.be.exactly(false);
    });

    it("Should be able to say 110 is not a plain object.", function () 
    {
        isPlainObject(110).should.be.exactly(false);
    });

    it("Should be able to say -13 is not a plain object.", function () 
    {
        isPlainObject(-13).should.be.exactly(false);
    });

    it("Should be able to say tata is not a plain object.", function () 
    {
        isPlainObject("tata").should.be.exactly(false);
    });
});