require("should");

const isUndefined = require("../../lib/object/isUndefined.js");

describe("isUndefined", function()
{
    it("Should be able to say undefined is undefined.", function()
    {
        let result = isUndefined(undefined);
        result.should.be.exactly(true);
    });

    it("Should be able to say a date object is not undefined.", function()
    {
        let result = isUndefined(new Date());
        result.should.be.exactly(false);
    });

    it("Should be able to say false is not undefined.", function()
    {
        let result = isUndefined(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not undefined.", function()
    {
        let result = isUndefined(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say an array is not undefined.", function()
    {
        let result = isUndefined([]);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not undefined.", function()
    {
        let result = isUndefined("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not undefined.", function()
    {
        let result = isUndefined(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not undefined.", function()
    {
        let result = isUndefined(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not undefined.", function()
    {
        let result = isUndefined(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not undefined.", function()
    {
        let result = isUndefined(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not undefined.", function()
    {
        let result = isUndefined("tata");
        result.should.be.exactly(false);
    });

    it("Should be able to say object is not undefined.", function()
    {
        let result = isUndefined({});
        result.should.be.exactly(false);
    });
});