require("should");

const blacklist = require("../../lib/collection/blacklist.js");

describe("blacklist", function()
{
    it("Should blacklist some values in an array.", function()
    {
        let col = ["Red", "Green", "Blue"];
        let result = blacklist(col, [0]);

        result.should.eql(["Green", "Blue"])
    });

    it("Should blacklist some values of an object.", function()
    {
        let col = {"Red" : 1, "Green": 2, "Blue": 3};
        let result = blacklist(col, ["Red"]);

        result.should.eql([2,3])
    });
});