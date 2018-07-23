require("should");

const memoize = require("../../lib/function/memoize.js");

describe("memoize", function()
{
    it("Should memoize a add function call.", function()
    {
        let add = function(n)
        {
            let sum = 0;
            if (n <= 2)
            {
                sum += 2*n - 1;
            }
            else
            {
                sum += n + add(n - 1);
            }

            return sum;
        };

        let fn = memoize(add);

        let result = fn(3);

        result.should.be.exactly(6);
    });
});