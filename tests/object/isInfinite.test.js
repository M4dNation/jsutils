require("should");

const isInfinite = require("../../lib/object/isInfinite.js");

describe("isInfinite", function()
{
    it("Should be able to say Infinity is infinite.", function()
    {
        let result = isInfinite(Infinity);
        result.should.be.exactly(true);
    });

    it("Should be able to say -Infinity is infinite.", function()
    {
        let result = isInfinite(-Infinity);
        result.should.be.exactly(true);
    });

    it("Should be able to say a date object is not infinite.", function()
    {
        let result = isInfinite(new Date());
        result.should.be.exactly(false);
    });

    it("Should be able to say false is not infinite.", function()
    {
        let result = isInfinite(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not infinite.", function()
    {
        let result = isInfinite(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say an array is not infinite.", function()
    {
        let result = isInfinite([]);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not infinite.", function()
    {
        let result = isInfinite("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not infinite.", function()
    {
        let result = isInfinite(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not infinite.", function()
    {
        let result = isInfinite(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not infinite.", function()
    {
        let result = isInfinite(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not infinite.", function()
    {
        let result = isInfinite(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not infinite.", function()
    {
        let result = isInfinite(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not infinite.", function()
    {
        let result = isInfinite("tata");
        result.should.be.exactly(false);
    });

    it("Should be able to say object is not infinite.", function()
    {
        let result = isInfinite({});
        result.should.be.exactly(false);
    });
});