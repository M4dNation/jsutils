require("should");

const isEqual = require("../../lib/object/isEqual.js");

describe("isEqual", function()
{
    it("Should be able to say if two numbers are equals.", function()
    {
        let result = isEqual(1,1);
        result.should.be.exactly(true);
    });

    it("Should be able to say if two strings are equals.", function()
    {
        let result = isEqual("test", "test");
        result.should.be.exactly(true);
    });

    it("Should be able to say if two object are equals.", function()
    {
        let obj1 = {"test": "titi", "tutu": "tata"};
        let obj2 = {"test": "titi", "tutu": "tata"};

        let result = isEqual(obj1, obj2);
        result.should.be.exactly(true);
    });

    it("Should be able to say if two object are not equals.", function()
    {
        let obj1 = {"test": "titi", "tutu": "tata"};
        let obj2 = {"test": "titi", "tutu": "tata", "toto": "tyty"};


        let result = isEqual(obj1, obj2);
        result.should.be.exactly(false);
    });

    it("Should be able to say if two arrays are equals.", function()
    {
        let arr1 = [1,2,3,4];
        let arr2 = [1,2,3,4];

        let result = isEqual(arr1, arr2);

        result.should.be.exactly(true);
    });

    it("Should be able to say if two arrays with strings are equals.", function()
    {
        let arr1 = ["titi", "tutu", "toto"];
        let arr2 = ["titi", "tutu", "toto"];

        let result = isEqual(arr1, arr2);

        result.should.be.exactly(true);
    });

    it("Should be able to say if two arrays are not equals.", function()
    {
        let arr1 = [1,2,3,4];
        let arr2 = [1,2,3,4,5];

        let result = isEqual(arr1, arr2);

        result.should.be.exactly(false);
    });

    it("Should be able to say if two arrays with strings are not equals.", function()
    {
        let arr1 = ["titi", "tutu", "toto"];
        let arr2 = ["titi", "tutu", "tata"];

        let result = isEqual(arr1, arr2);

        result.should.be.exactly(false);
    });
});