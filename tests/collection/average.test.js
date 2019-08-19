require("should");

const average = require("../../lib/collection/average.js");

describe("average", function () 
{
    it("Should calculate the average of an array.", function () 
    {
        let col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let aver = average(col);

        aver.should.be.exactly(5);
    });

    it("Should calculate the average of the value inside an object.", function () 
    {
        let col = { "titi": 99, "toto": 999 };
        let aver = average(col);

        aver.should.be.exactly(549);
    });

    it("Should calculate the average with all numbers tripled .", function () 
    {
        let col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let aver = average(col, function (n) { return n * 3; })

        aver.should.be.exactly(15);
    });
});