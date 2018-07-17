require("should");

const isRegExp = require("../../lib/object/isRegExp.js");

describe("isRegExp", function()
{
    it("Should be able to say object is not a regular expression.", function()
    {
        let result = isRegExp({});
        result.should.be.exactly(false);
    });

    it("Should be able to say a date object is not a regular expression.", function()
    {
        let result = isRegExp(new Date());
        result.should.be.exactly(false);
    });

    it("Should be able to say false is not a regular expression.", function()
    {
        let result = isRegExp(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not a regular expression.", function()
    {
        let result = isRegExp(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say an array is not a regular expression.", function()
    {
        let result = isRegExp([]);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not a regular expression.", function()
    {
        let result = isRegExp("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not a regular expression.", function()
    {
        let result = isRegExp(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not a regular expression.", function()
    {
        let result = isRegExp(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not a regular expression.", function()
    {
        let result = isRegExp(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not a regular expression.", function()
    {
        let result = isRegExp(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not a regular expression.", function()
    {
        let result = isRegExp(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not a regular expression.", function()
    {
        let result = isRegExp("tata");
        result.should.be.exactly(false);
    });
});