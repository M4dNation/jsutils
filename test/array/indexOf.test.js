require("should");

const indexOf = require("../../lib/array/indexOf");

describe("indexOf", function() {
  it("Should find an element.", function() {
    const arr = [1, 2, 3];

    const result = indexOf(arr, 2);

    result.should.be.exactly(1);
  });

  it("Should not find an element.", function() {
    const arr = [1, 2, 3];

    const result = indexOf(arr, 20);

    result.should.be.exactly(-1);
  });
});
