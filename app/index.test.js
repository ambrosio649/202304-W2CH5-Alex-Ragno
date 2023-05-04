import { replaceLenght, replacePush } from "./index.js";

describe("Given the function replaceLenght", () => {
  describe("When given the array of 1, 2, 3, 4", () => {
    test("Them it should return 4", () => {
      const array = [1, 2, 3, 4];
      const expectedResult = 4;

      const resultReturned = replaceLenght(array);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function replacePush", () => {
  describe("When given the array 1, 2 and given the values of 3", () => {
    test("Then it should return 3", () => {
      const array = [1, 2];
      const value = 3;
      const expectedResult = 3;

      const returned = replacePush(array, value);

      expect(returned).toBe(expectedResult);
    });
  });
});
