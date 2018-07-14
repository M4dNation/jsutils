require("should");

const has = require("../../lib/collection/has.js");

describe("has", function () 
{
    it("Should say a key is inside an array.", function () 
    {
        let col = ["titi", "toto"];

        has(col, 1).should.be.equal(true);
    });

    it("Should say a key is not inside an array.", function () 
    {
        let col = ["titi", "toto"];

        has(col, 10).should.be.equal(false);
    });

    it("Should say a key is inside an object.", function () 
    {
        let col = { "titi": "toto" };

        has(col, "titi").should.be.equal(true);
    });

    it("Should say a key is not inside an object.", function () 
    {
        let col = { "titi": "toto" };

        has(col, "tata").should.be.equal(false);
    });
});