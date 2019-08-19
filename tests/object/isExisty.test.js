require("should");

const isExisty = require("../../lib/object/isExisty.js");

describe("isExisty", function()
{
    it("Should be able to say zero is existy.", function()
    {
        let result = isExisty(0);
        result.should.be.exactly(true);
    });

    it("Should be able to say empty string is existy.", function()
    {
        let result = isExisty("");
        result.should.be.exactly(true);
    });

    it("Should be able to say null is not existy.", function()
    {
        let result = isExisty(null);
        result.should.be.exactly(false);
    });

    it("Should be able to say undefined is not existy.", function()
    {
        let result = isExisty(undefined);
        result.should.be.exactly(false);
    });

    it("Should be able to say NaN is existy.", function()
    {
        let result = isExisty(NaN);
        result.should.be.exactly(true);
    });

    it("Should be able to say false is existy.", function()
    {
        let result = isExisty(false);
        result.should.be.exactly(true);
    });

    it("Should be able to say true is existy.", function()
    {
        let result = isExisty(true);
        result.should.be.exactly(true);
    });

    it("Should be able to say 110 is existy.", function()
    {
        let result = isExisty(110);
        result.should.be.exactly(true);
    });

    it("Should be able to say -13 is existy.", function()
    {
        let result = isExisty(-13);
        result.should.be.exactly(true);
    });

    it("Should be able to say tata is existy.", function()
    {
        let result = isExisty("tata");
        result.should.be.exactly(true);
    });
});