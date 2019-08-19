require("should");

const isHexColor = require("../../lib/utility/isHexColor.js");

describe("isHexColor", function()
{
    it("Should find out if the number is an hex color.", function()
    {
        let color = 0x1258AE;
        let notColor = 0x1232123FFFFFF;

        
        isHexColor(color).should.be.exactly(true);
        isHexColor(notColor).should.be.exactly(false);
    });

    it("Should find out if the string is an hex color.", function()
    {
        let color = "#1258AE";
        let notColor = "#1232123FFFFFF";

        isHexColor(color).should.be.exactly(true);
        isHexColor(notColor).should.be.exactly(false);
    });
});