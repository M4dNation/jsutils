const indexOf = require("../../lib/array/index-of");

describe("indexOf", () => {
  test("Expect to find an element.", () => {
    const arr = [1, 2, 3];

    const result = indexOf(arr, 2);

    expect(result).toBe(1);
  });

  test("Expect to not find an element.", () => {
    const arr = [1, 2, 3];

    const result = indexOf(arr, 20);

    expect(result).toBe(-1);
  });
});
