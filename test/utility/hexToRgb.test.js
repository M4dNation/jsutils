require("should");

const hexToRgb = require("../../lib/utility/hexToRgb.js");

describe("hexToRgb", function()
{
    it("Should give an rgb object.", function()
    {
        let hex = "#FFFFFF";

        let blue = hexToRgb(hex).b;
        let green = hexToRgb(hex).g;
        let red = hexToRgb(hex).r;

        blue.should.be.exactly(255);
        green.should.be.exactly(255);
        red.should.be.exactly(255);
    });
});