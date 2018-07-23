require("should");

const rgbToHex = require("../../lib/utility/rgbToHex.js");

describe("rgbToHex", function()
{
    it("Should give an hexadecimal color.", function()
    {
        let red = 255;
        let green = 255;
        let blue = 255;

        let hex = rgbToHex(red, green, blue);

        hex.should.be.exactly("#FFFFFF");
    })
});