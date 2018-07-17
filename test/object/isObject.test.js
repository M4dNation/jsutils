require("should");

const isObject = require("../../lib/object/isObject.js");

describe("isObject", function()
{
    it("Should be able to say object is an object.", function()
    {
        let result = isObject({});
        result.should.be.exactly(true);
    });

    it("Should be able to say a date object is an object.", function()
    {
        let result = isObject(new Date());
        result.should.be.exactly(true);
    });

    it("Should be able to say an array is an object.", function()
    {
        let result = isObject([]);
        result.should.be.exactly(true);
    });

    it("Should be able to say null is an object.", function()
    {
        let result = isObject(null);
        result.should.be.exactly(true);
    });

    it("Should be able to say false is not an object.", function()
    {
        let result = isObject(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not an object.", function()
    {
        let result = isObject(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not an object.", function()
    {
        let result = isObject("");
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not an object.", function()
    {
        let result = isObject(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not an object.", function()
    {
        let result = isObject(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not an object.", function()
    {
        let result = isObject(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not an object.", function()
    {
        let result = isObject(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not an object.", function()
    {
        let result = isObject("tata");
        result.should.be.exactly(false);
    });
});