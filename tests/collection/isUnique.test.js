require("should");

const isUnique = require("../../lib/collection/isUnique.js");

describe("isUnique", function()
{
    it("Should know if a value is unique inside an array.", function()
    {
        let col = [0,1,2,3,4];
        let result = isUnique(col, 2);

        result.should.be.exactly(true);
    });

    it("Should know if a value is unique inside an object.", function()
    {
        let col = {"titi": "toto", "tata": "toto"};

        let result = isUnique(col, "titi");

        result.should.be.exactly(false);
    });
});