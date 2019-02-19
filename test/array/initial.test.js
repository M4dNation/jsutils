require("should");

const initial = require("../../lib/array/initial.js");

describe("initial", function() {
  it("Should get the all but the last element.", function() {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = initial(arr);

    result.should.eql(["Earth", "Mars"]);
  });

  it("Should get all but the two last elements.", function() {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = initial(arr, 2);

    result.should.eql(["Earth"]);
  });
});
