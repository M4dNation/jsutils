const initial = require("../../lib/array/initial");

describe("initial", () => {
  test("Expect to get all but the last element.", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = initial(arr);

    expect(result).toEqual(expect.arrayContaining(["Earth", "Mars"]));
  });

  it("Expect to get all but the two last elements.", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = initial(arr, 2);

    expect(result).toEqual(expect.arrayContaining(["Earth"]));
  });
});
