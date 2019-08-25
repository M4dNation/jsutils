const lastIndexOf = require("../../lib/array/last-index-of");

describe("lastIndexOf", () => {
  test("Expect to find an element.", () => {
    const arr = [1, 2, 3, 2];

    const result = lastIndexOf(arr, 2);

    expect(result).toBe(3);
  });

  test("Expect not to find an element.", () => {
    const arr = [1, 2, 3];

    const result = lastIndexOf(arr, 20);

    expect(result).toBe(-1);
  });
});
