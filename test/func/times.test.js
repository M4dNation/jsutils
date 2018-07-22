require("should");

const times = require("../../lib/func/times.js");

describe("times", function()
{
    it("Should call a function multiple times.", function()
    {
        let fn = function(v) { return v + 1;};

        fn = times(fn, 3);

        let result = fn(5);

        result.should.be.exactly(6);
    });
});