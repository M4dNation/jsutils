require("should");

const least = require("../../lib/collection/least.js");

describe("least", function()
{
    it("Should find the least represented value in an array.", function()
    {
        let col = [1,1,1,2,2,2,2,3,3,4,5,5,5,5];

        let result = least(col);

        result.should.be.exactly("4");
    });

    it("Should find the least represented value in an object.", function()
    {
        let col = {0: 'Zero', 1: 'Zero', 2: 'One', 3: 'Two', 4: 'Two'};

        let result = least(col);

        result.should.be.exactly("One");
    });
});