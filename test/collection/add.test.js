require("should");

const add = require("../../lib/collection/add.js");

describe("add", function () 
{
    it("Should be able to add a number to an array.", function () 
    {
        let col = [0, 1, 2];
        add(col, 3, 3);

        col.should.eql([0, 1, 2, 3]);
    });

    it("Should be able to add a string to an array.", function () 
    {
        let col = [0, 1, 2];
        add(col, 3, "21");

        col.should.eql([0, 1, 2, "21"]);
    });

    it("Should be able to add a value to an object.", function () 
    {
        let col = {};
        add(col, "titi", 5);

        col.should.eql({ "titi": 5 });
    });
});