require("should");

const once = require("../../lib/function/once.js");

describe("once", function()
{
    it("Should call a function only once.", function()
    {
        let fn = function () {return 5;};

        fn = once(fn);

        let result = fn();
        result.should.be.exactly(5);

        result = fn();

        should(result).be.exactly(undefined);
    });
});