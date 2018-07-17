require("should");

const get = require("../../lib/object/get.js");

describe("get", function()
{
    it("Should get a value at a specified key.", function()
    {
        let obj = {0: "test", "titi": "tata"};

        let result = get(obj, "titi");

        result.should.be.exactly("tata");
    });

    it("Should not get a value at an unknown key.", function()
    {
        let obj = {0: "test", "titi": "tata"};

        let result = get(obj, "tutu");

        should(result).be.exactly(undefined);
    });
});