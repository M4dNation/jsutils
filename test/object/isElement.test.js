require("should");

const isElement = require("../../lib/object/isElement.js");

describe("isElement", function()
{
    it("Should be able to say a date object is not an HTML DOM element.", function()
    {
        let result = isElement(new Date());
        result.should.be.exactly(false);
    });

    it("Should be able to say false is not an HTML DOM element.", function()
    {
        let result = isElement(false);
        result.should.be.exactly(false);
    });

    it("Should be able to say true is not an HTML DOM element.", function()
    {
        let result = isElement(true);
        result.should.be.exactly(false);
    });

    it("Should be able to say an array is not an HTML DOM element.", function()
    {
        let result = isElement([]);
        result.should.be.exactly(false);
    });

    it("Should be able to say empty string is not an HTML DOM element.", function()
    {
        let result = isElement("");
        result.should.be.exactly(false);
    });

    it("Should be able to say null is not an HTML DOM element.", function()
    {
        let result = isElement(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not an HTML DOM element.", function()
    {
        let result = isElement(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is not an HTML DOM element.", function()
    {
        let result = isElement(NaN);
        result.should.be.exactly(false);
    });

    it("Should be able to say 110 is not an HTML DOM element.", function()
    {
        let result = isElement(110);
        result.should.be.exactly(false);
    });

    it("Should be able to say -13 is not an HTML DOM element.", function()
    {
        let result = isElement(-13);
        result.should.be.exactly(false);
    });

    it("Should be able to say tata is not an HTML DOM element.", function()
    {
        let result = isElement("tata");
        result.should.be.exactly(false);
    });

    it("Should be able to say object is not an HTML DOM element.", function()
    {
        let result = isElement({});
        result.should.be.exactly(false);
    });
});