const tail = require("../../lib/array/tail");

describe("tail", () => {
  test("Expect to get all elements but the first.", () => {
    const arr = ["Magnolia", "Rose", "Lilly"];
    const expectedResult = ["Rose", "Lilly"];

    const result = tail(arr);

    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test("Expect to get all elements but the two first one.", () => {
    const arr = ["Magnolia", "Rose", "Lilly"];
    const expectedResult = ["Lilly"];

    const result = tail(arr, 2);

    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
