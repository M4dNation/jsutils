const difference = require("../../lib/array/difference");

describe("difference", () => {
  it("Should get wanted elements.", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = difference(arr, ["Earth", "Jupiter"]);

    expect(result).toEqual(expect.arrayContaining(["Mars"]));
  });
});
