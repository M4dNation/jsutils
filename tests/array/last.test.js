const last = require("../../lib/array/last");

describe("last", () => {
  test("Expect to get the last element.", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = last(arr);

    expect(result).toEqual("Jupiter");
  });

  test("Expect to get the two last elements", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = last(arr, 2);

    expect(result).toEqual(expect.arrayContaining(["Mars", "Jupiter"]));
  });
});
