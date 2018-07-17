require("should");

const isNull = require("../../lib/object/isNull.js");

describe("isNull", function()
{
    it("Should be able to say null is Null.", function()
    {
        let result = isNull(null);
        result.should.be.exactly(true);
    });

    it("Should be able to say a date object is not Null.", function()
    {
        let result = isNull(new Date());
        result.should.be.exactly(false);
    });

    it("Should be able to say false is not Null.", function()
    {
        let result = isNull(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not Null.", function()
    {
        let result = isNull(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say an array is not Null.", function()
    {
        let result = isNull([]);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not Null.", function()
    {
        let result = isNull("");
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not Null.", function()
    {
        let result = isNull(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not Null.", function()
    {
        let result = isNull(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not Null.", function()
    {
        let result = isNull(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not Null.", function()
    {
        let result = isNull(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not Null.", function()
    {
        let result = isNull("tata");
        result.should.be.exactly(false);
    });

    it("Should be able to say object is not Null.", function()
    {
        let result = isNull({});
        result.should.be.exactly(false);
    });
});