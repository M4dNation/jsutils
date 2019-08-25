const remove = require("../../lib/array/remove");

describe("remove", () => {
  test("Expect to remove a value from an array.", () => {
    const arr = [1, 2, 2, 4];
    const expectedResult = [1, 4];

    const result = remove(arr, 2);

    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
