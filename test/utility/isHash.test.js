require("should");

const isHash = require("../../lib/utility/isHash.js");

describe("isHash", function()
{
    it("Should find out if the provided value is a hash.", function()
    {
        isHash("6153A6FA0E4880D9B8D0BE4720F78E895265D0A9", "sha1").should.be.exactly(false);
        isHash("d6aa97d33d459ea3670056e737c99a3d", "md5").should.be.exactly(true);
    });
});