require("should");

const range = require("../../lib/number/range.js");

describe("range", function()
{
    it("Should be able to generate range between 0 and 5.", function()
    {
        let result = range(0, 5, 1);

        result.should.eql([0,1,2,3,4,5]);
    });

    it("Should be able to generate range between -5 and 5.", function()
    {
        let result = range(-5, 5, 1);

        result.should.eql([-5,-4,-3,-2,-1,0,1,2,3,4,5]);
    });

    it("Should be able to generate range between 5 and 10.", function()
    {
        let result = range(5, 10, 1);

        result.should.eql([5,6,7,8,9,10]);
    });

    it("Should be able to generate range between -5 and -3.", function()
    {
        let result = range(-5, -3, 1);

        result.should.eql([-5,-4,-3]);
    });

    it("Should be able to generate range between 0 and 0.", function()
    {
        let result = range(0, 0, 1);

        result.should.eql([0]);
    });

    it("Should be able to generate range between 1 and -2 by swapping.", function()
    {
        let result = range(1, -2, 1);

        result.should.eql([-2,-1,0,1]);
    });

    it("Should not be able to generate range between test and titi.", function()
    {
        let result = range("test", "toto");

        result.should.eql(false);
    });
});