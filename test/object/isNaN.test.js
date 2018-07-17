require("should");

const isNaN = require("../../lib/object/isNaN.js");

describe("isNan", function()
{
    it("Should be able to say NaN is NaN.", function()
    {
        let result = isNaN(NaN);
        result.should.be.exactly(true);
    });

    it("Should be able to say a date object is not a NaN.", function()
    {
        let result = isNaN(new Date());
        result.should.be.exactly(false);
    });

    it("Should be able to say false is not a NaN.", function()
    {
        let result = isNaN(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not a NaN.", function()
    {
        let result = isNaN(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say an array is not a NaN.", function()
    {
        let result = isNaN([]);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not a NaN.", function()
    {
        let result = isNaN("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not a NaN.", function()
    {
        let result = isNaN(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not a NaN.", function()
    {
        let result = isNaN(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not a NaN.", function()
    {
        let result = isNaN(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not a NaN.", function()
    {
        let result = isNaN(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not a NaN.", function()
    {
        let result = isNaN("tata");
        result.should.be.exactly(false);
    });

    it("Should be able to say object is not a NaN.", function()
    {
        let result = isNaN({});
        result.should.be.exactly(false);
    });
});