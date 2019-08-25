const zip = require("../../lib/array/zip");

describe("zip", () => {
  test("Expect to merge two elements into a single array.", () => {
    const arr = ["Red", "Blue"];
    const secondArr = ["#F00", "#00F"];

    const result = zip(arr, secondArr);
    const expectedResult = [["Red", "#F00"], ["Blue", "#00F"]];

    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test("Expect to merge multiple elements into a single array.", () => {
    const arr = ["Red", "Blue"];
    const secondArr = ["#F00", "#00F"];
    const thirdArr = [{ r: 255, g: 0, b: 0 }, { r: 0, g: 0, b: 255 }];

    const result = zip(arr, secondArr, thirdArr);
    const expectedResult = [
      ["Red", "#F00", { r: 255, g: 0, b: 0 }],
      ["Blue", "#00F", { r: 0, g: 0, b: 255 }],
    ];

    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
