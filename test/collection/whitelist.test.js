require("should");

const whitelist = require("../../lib/collection/whitelist.js");

describe("whitelist", function()
{
    it("Should whitelist some values in an array.", function()
    {
        let col = ["Red", "Green", "Blue"];
        let result = whitelist(col, [0]);

        result.should.eql(["Red"]);
    });

    it("Should whitelist some values of an object.", function()
    {
        let col = {"Red" : 1, "Green": 2, "Blue": 3};
        let result = whitelist(col, ["Red"]);

        result.should.eql([1]);
    });
});