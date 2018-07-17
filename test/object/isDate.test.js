require("should");

const isDate = require("../../lib/object/isDate.js");

describe("isDate", function()
{
    it("Should be able to say a date object is a date.", function()
    {
        let result = isDate(new Date());
        result.should.be.exactly(true);
    });

    it("Should be able to say false is not a date.", function()
    {
        let result = isDate(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not a date.", function()
    {
        let result = isDate(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say an array is not a date.", function()
    {
        let result = isDate([]);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not a date.", function()
    {
        let result = isDate("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not a date.", function()
    {
        let result = isDate(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not a date.", function()
    {
        let result = isDate(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not a date.", function()
    {
        let result = isDate(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not a date.", function()
    {
        let result = isDate(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not a date.", function()
    {
        let result = isDate(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not a date.", function()
    {
        let result = isDate("tata");
        result.should.be.exactly(false);
    });

    it("Should be able to say object is not a date.", function()
    {
        let result = isDate({});
        result.should.be.exactly(false);
    });
});