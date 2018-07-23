require("should");

const isIp = require("../../lib/utility/isIp.js");

describe("isIp", function()
{
    it("Should find out if the provided address is an ip.", function()
    {
        isIp("192.168.0.1").should.be.exactly(true);
        isIp("2001:0db8:0000:85a3:0000:0000:ac1f:8001").should.be.exactly(true);
        isIp("2001:db8:0:85a3::ac1f:8001").should.be.exactly(true);
        isIp("localhost").should.be.exactly(false);
        isIp("9.12.18.7").should.be.exactly(true);
        isIp("9.12.18.7.13").should.be.exactly(false);
        isIp("9.12.18.7", 6).should.be.exactly(false);
        isIp("2001:db8:0:85a3::ac1f:8001", 4).should.be.exactly(false);            
    });
});