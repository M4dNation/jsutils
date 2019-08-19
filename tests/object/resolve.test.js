require("should");

const resolve = require("../../lib/object/resolve.js");

describe("resolve", function()
{
    it("Should find a value.", function()
    {
        let obj = {colors: {red: {vals: {rgb: "#F00", hsl: "0, 100, 50"}}}};
        let result = resolve(obj, "colors.red.vals.rgb");

        result.should.be.exactly("#F00");
    });

    it("Should find a namespace.", function()
    {
        let obj = {colors: {red: {vals: {rgb: "#F00", hsl: "0, 100, 50"}}}};
        let result = resolve(obj, "rgb", true);

        result.should.be.exactly("colors.red.vals.rgb")
    });
});