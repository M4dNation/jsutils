require("should");

const parent = require("../../lib/object/parent.js");

describe("parent", function()
{
    it("Should retrieve the nested object of a parent one.", function()
    {
        let obj = {color: {red: {val: {rgb: "#F00"}}}};
        let result = parent(obj, "val");
        let expectedResult = {val: {rgb: "#F00"}};

        result.should.eql(expectedResult);
    });
});