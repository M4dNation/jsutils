require("should");

const most = require("../../lib/collection/most.js");

describe("most", function()
{
    it("Should find the most represented value in an array.", function()
    {
        let col = [1,1,1,2,2,2,2,3,3,4,5,5,5,5];

        let result = most(col);

        result.should.be.exactly("2");
    });

    it("Should find the most represented value in an object.", function()
    {
        let col = {0: "Zero", 1: "Zero", 2: "One", 3: "Two", 4: "Two"};

        let result = most(col);

        result.should.be.exactly("Zero");
    });
});