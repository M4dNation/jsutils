var assert = require("assert");
const Num = require("../lib/jstoolbox.js").Num;
const Obj = require("../lib/jstoolbox.js").Obj;

describe("Number Methods", function()
{
    describe("range", function()
    {
        it("Should be able to generate range between 0 and 5.", function()
        {
            let result = Num.range(0, 5, 1);

            // Result should be an array
            assert.strictEqual(Obj.isArray(result), true);

            // Result should be equal to [0,1,2,3,4,5]
            assert.strictEqual(Obj.isEqual(result, [0,1,2,3,4,5]), true);
        });

        it("Should be able to generate range between -5 and 5.", function()
        {
            let result = Num.range(-5, 5, 1);

            // Result should be an array
            assert.strictEqual(Obj.isArray(result), true);

            // Result should be equal to [-5,-4,-3,-2,-1,0,1,2,3,4,5]
            assert.strictEqual(Obj.isEqual(result, [-5,-4,-3,-2,-1,0,1,2,3,4,5]), true);
        });

        it("Should be able to generate range between 5 and 10.", function()
        {
            let result = Num.range(5, 10, 1);

            // Result should be an array
            assert.strictEqual(Obj.isArray(result), true);

            // Result should be equal to [5,6,7,8,9,10]
            assert.strictEqual(Obj.isEqual(result, [5,6,7,8,9,10]), true);
        });

        it("Should be able to generate range between -5 and -3.", function()
        {
            let result = Num.range(-5, -3, 1);

            // Result should be an array
            assert.strictEqual(Obj.isArray(result), true);

            // Result should be equal to [-5,-4,-3]
            assert.strictEqual(Obj.isEqual(result, [-5,-4,-3]), true);
        });

        it("Should be able to generate range between 0 and 0.", function()
        {
            let result = Num.range(0, 0, 1);

            // Result should be an array
            assert.strictEqual(Obj.isArray(result), true);

            // Result should be equal to [0]
            assert.strictEqual(Obj.isEqual(result, [0]), true);
        });

        it("Should be able to generate range between 1 and -2 by swapping.", function()
        {
            let result = Num.range(1, -2, 1);

            // Result should be an array
            assert.strictEqual(Obj.isArray(result), true);

            // Result should be equal to [0]
            assert.strictEqual(Obj.isEqual(result, [-2,-1,0,1]), true);
        });

        it("Should not be able to generate range between test and titi.", function()
        {
            let result = Num.range("test", "toto");

            assert.strictEqual(result, false);
        });
    });

    describe("isZero", function()
    {
        it("Should be able to say 0 is zero.", function()
        {
            assert.strictEqual(Num.isZero(0), true);
        });

        it("Should be able to say 1 is not zero.", function()
        {
            assert.strictEqual(Num.isZero(1), false);
        });

        it("Should be able to say -1 is not zero.", function()
        {
            assert.strictEqual(Num.isZero(-1), false);
        });

        it("Should be able to say false is not zero.", function()
        {
            assert.strictEqual(Num.isZero(false), false);
        });

        it("Should be able to say true is not zero.", function()
        {
            assert.strictEqual(Num.isZero(true), false);
        });

        it("Should be able to say titi is not zero.", function()
        {
            assert.strictEqual(Num.isZero("titi"), false);
        });
    });

    describe("isOne", function()
    {
        it("Should be able to say 1 is one.", function()
        {
            assert.strictEqual(Num.isOne(1), true);
        });

        it("Should be able to say 0 is not one.", function()
        {
            assert.strictEqual(Num.isOne(0), false);
        });

        it("Should be able to say -1 is not one.", function()
        {
            assert.strictEqual(Num.isOne(-1), false);
        });

        it("Should be able to say false is not one.", function()
        {
            assert.strictEqual(Num.isOne(false), false);
        });

        it("Should be able to say true is not one.", function()
        {
            assert.strictEqual(Num.isOne(true), false);
        });

        it("Should be able to say titi is not one.", function()
        {
            assert.strictEqual(Num.isOne("titi"), false);
        });
    });

    describe("isPositive", function()
    {
        it("Should be able to say 5 is positive.", function()
        {
            assert.strictEqual(Num.isPositive(5), true);
        });

        it("Should be able to say 0 is positive.", function()
        {
            assert.strictEqual(Num.isPositive(0), true);
        });

        it("Should be able to say -5 is not positive.", function()
        {
            assert.strictEqual(Num.isPositive(-5), false);
        });

        it("Should be able to say titi is not positive.", function()
        {
            assert.strictEqual(Num.isPositive("titi"), false);
        });
    });

    describe("isNegative", function()
    {
        it("Should be able to say -5 is negative.", function()
        {
            assert.strictEqual(Num.isNegative(-5), true);
        });

        it("Should be able to say 0 is negative.", function()
        {
            assert.strictEqual(Num.isNegative(0), true);
        });

        it("Should be able to say 5 is not negative.", function()
        {
            assert.strictEqual(Num.isNegative(5), false);
        });

        it("Should be able to say titi is not negative.", function()
        {
            assert.strictEqual(Num.isNegative("titi"), false);
        });
    });

    describe("isDouble", function()
    {
        it("Should be able to say 6 is the double of 3.", function()
        {
            assert.strictEqual(Num.isDouble(6, 3), true);
        });

        it("Should be able to say 18 is not the double of 8.", function()
        {
            assert.strictEqual(Num.isDouble(18, 8), false);
        });
    });

    describe("isTriple", function()
    {
        it("Should be able to say 27 is the triple of 9.", function()
        {
            assert.strictEqual(Num.isTriple(27, 9), true);
        });

        it("Should be able to say 53 is not the triple of 11.", function()
        {
            assert.strictEqual(Num.isTriple(53, 11), false);
        });
    });

    describe("isTimes", function()
    {
        it("Should be able to say 20 is 5 times 4.", function()
        {
            assert.strictEqual(Num.isTimes(20, 4, 5), true);
        });

        it("Should be able to say 25 is not 6 times 12.", function()
        {
            assert.strictEqual(Num.isTimes(25, 12, 6), false);
        });
    });

    describe("gt", function()
    {
        it("Should be able to say 520 is greater than 3.", function()
        {
            assert.strictEqual(Num.gt(520, 3), true);
        });

        it("Should be able to say 3 is greater than 0.", function()
        {
            assert.strictEqual(Num.gt(3, 0), true);
        });

        it("Should be able to say 0 is greater than -10.", function()
        {
            assert.strictEqual(Num.gt(0, -10), true);
        });

        it("Should be able to say -10 is greater than -30.", function()
        {
            assert.strictEqual(Num.gt(-10, -30), true);
        });
    });

    describe("gte", function()
    {
        it("Should be able to say 520 is greater than or equal to 3.", function()
        {
            assert.strictEqual(Num.gte(520, 3), true);
        });

        it("Should be able to say 3 is greater than or equal to 0.", function()
        {
            assert.strictEqual(Num.gte(3, 0), true);
        });

        it("Should be able to say 0 is greater than or equal to -10.", function()
        {
            assert.strictEqual(Num.gte(0, -10), true);
        });

        it("Should be able to say -10 is greater than or equal to -30.", function()
        {
            assert.strictEqual(Num.gte(-10, -30), true);
        });

        it("Should be able to say 10 is greater than or equal to 10.", function()
        {
            assert.strictEqual(Num.gte(10,10), true);
        });

        it("Should be able to say -10 is greater than or equal to -10.", function()
        {
            assert.strictEqual(Num.gte(-10,-10), true);
        });
    });

    describe("lt", function()
    {
        it("Should be able to say 3 is lower than 520.", function()
        {
            assert.strictEqual(Num.lte(3, 520), true);
        });

        it("Should be able to say 0 is lower than 3.", function()
        {
            assert.strictEqual(Num.lte(0, 3), true);
        });

        it("Should be able to say -10 is lower than 0.", function()
        {
            assert.strictEqual(Num.lte(-10, 0), true);
        });

        it("Should be able to say -30 is lower than -10.", function()
        {
            assert.strictEqual(Num.lte(-30, -10), true);
        });
    });

    describe("lte", function()
    {
        it("Should be able to say 3 is lower than or equal to 520.", function()
        {
            assert.strictEqual(Num.lte(3, 520), true);
        });

        it("Should be able to say 0 is lower than or equal to 3.", function()
        {
            assert.strictEqual(Num.lte(0, 3), true);
        });

        it("Should be able to say -10 is lower than or equal to 0.", function()
        {
            assert.strictEqual(Num.lte(-10, 0), true);
        });

        it("Should be able to say -30 is lower than or equal to -10.", function()
        {
            assert.strictEqual(Num.lte(-30, -10), true);
        });

        it("Should be able to say 10 is lower than or equal to 10.", function()
        {
            assert.strictEqual(Num.lte(10,10), true);
        });

        it("Should be able to say -10 is lower than or equal to -10.", function()
        {
            assert.strictEqual(Num.lte(-10,-10), true);
        });
    });
});
