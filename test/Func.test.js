var assert = require("assert");
const Func = require("../lib/jstoolbox.js").Func;

describe("Function Methods", function()
{
    describe("after", function()
    {
        it("Should return a value after 3 calls.", function()
        {
            let fn = function (v) { return v; };
            let returnVal = undefined;
            fn = Func.after(fn, 3);

            returnVal = fn(5);
            returnVal = fn(5);
            returnVal = fn(5);

            assert.strictEqual(returnVal, 5);
        });
    });

    describe("compose", function()
    {
        it("Should compose two functions.", function()
        {
            let fn1 = function(v) { return v + " is dead";};
            let fn2 = function(v) { return v + " and alive!"; };

            let composedFunction = Func.compose(fn2, fn1);

            let result = composedFunction("An undead");
            assert.strictEqual(result, "An undead is dead and alive!");
        });
    });

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

            let fn = Func.memoize(add);

            let result = fn(3);

            assert.strictEqual(result, 6);
        });
    });

    describe("once", function()
    {
        it("Should call a function only once.", function()
        {
            let fn = function () {return 5;};

            fn = Func.once(fn);

            let result = fn();
            assert.strictEqual(result, 5);

            result = fn();

            assert.strictEqual(result, undefined);
        });
    });

    describe("times", function()
    {
        it("Should call a function multiple times.", function()
        {
            let fn = function(v) { return v + 1;};

            fn = Func.times(fn, 3);

            let result = fn(5);

            assert.strictEqual(result, 6);
        });
    });
});
