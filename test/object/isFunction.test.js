require("should");

const isFunction = require("../../lib/object/isFunction.js");

describe("isFunction", function()
{
    it("Should be able to say a function is a function.", function()
    {
        let result = isFunction(function(){});
        result.should.be.exactly(true);
    });

    it("Should be able to say a date object is not a function.", function()
    {
        let result = isFunction(new Date());
        result.should.be.exactly(false);
    });

    it("Should be able to say false is not a function.", function()
    {
        let result = isFunction(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not a function.", function()
    {
        let result = isFunction(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say an array is not a function.", function()
    {
        let result = isFunction([]);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not a function.", function()
    {
        let result = isFunction("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not a function.", function()
    {
        let result = isFunction(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not a function.", function()
    {
        let result = isFunction(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not a function.", function()
    {
        let result = isFunction(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not a function.", function()
    {
        let result = isFunction(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not a function.", function()
    {
        let result = isFunction(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not a function.", function()
    {
        let result = isFunction("tata");
        result.should.be.exactly(false);
    });

    it("Should be able to say object is not a function.", function()
    {
        let result = isFunction({});
        result.should.be.exactly(false);
    });
});