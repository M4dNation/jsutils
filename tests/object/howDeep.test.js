require("should");

const howDeep = require("../../lib/object/howDeep.js");

describe("howDeep", function()
{
    it("Should find the depth level of a specified key.", function()
    {
        let obj = {0: {1: {2: "Green"}}};

        let result = howDeep(obj, 2);

        result.should.be.exactly(3);
    });

    it("Should not find the depth level of an unknown key.", function()
    {
        let obj = {0: {1: {2: "Green"}}};

        let result = howDeep(obj, "tata");

        should(result).be.exactly(undefined);
    });
});